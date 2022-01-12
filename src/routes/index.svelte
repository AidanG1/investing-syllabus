<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch }) {
		const url = '/api/get_sections';
		const res = await fetch(url);
		if (res.ok) {
			return {
				props: {
					sections: res.json()
				}
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	// import inView from '$lib/utils';
	import '@kahi-ui/framework/dist/kahi-ui.framework.min.css';
	import {
		Button,
		Divider,
		Ellipsis,
		Heading,
		Text,
		Aside,
	} from '@kahi-ui/framework';
	export let sections;
	let create_pdf = function () {};
	function onEnter(e) {
		e.style.color = 'yellow';
	}
	function onExit(e) {
		e.style.color = '';
	}
	onMount(async () => {
		create_pdf = function () {
			window.scroll({ top: 0, left: 0, behavior: 'smooth' });
			setTimeout(() => {
				html2pdf().from(document.getElementById('syllabus')).save('syllabus.pdf');
			}, 500); // make sure fully at top before creating pdf
		};
	});
</script>

{#await sections}
	<h1>Loading<Ellipsis /></h1>
{:then result}
	<div id="content_left">
		<Aside.Container palette="dark" max_width="content-max" height="100">
			<Aside.Header>
				<Heading id="top">Sections</Heading>
				<Divider />
				<Button palette="accent" variation="outline" on:click={create_pdf}>
					Download the syllabus as a pdf
				</Button>
			</Aside.Header>

			<Aside.Section>
				{#each result.sections_sorted as section}
					<Text>
						<a href="#heading_{section.heading.replace(/ /g, '_')}" class="aside_section">
							{section.heading}
						</a>
					</Text>
				{/each}
			</Aside.Section>
		</Aside.Container>
	</div>
	<div id="content_right">
		<main id="syllabus">
			<Heading>Syllabus</Heading>
			{#each result.sections_sorted as section}
				<Divider />
				<h1
					id="heading_{section.heading.replace(/ /g, '_')}"
				>
					{section.heading}
				</h1>
				<Text>{@html section.content}</Text>
			{/each}
		</main>
	</div>
	<Button
		palette="accent"
		variation="outline"
		on:click={() => {
			window.scroll({ top: 0, left: 0, behavior: 'smooth' });
		}}
		id="top_button">Top</Button
	>
{/await}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
	:global(h1, h2, p) {
		font-family: 'Roboto', sans-serif;
	}

	@media only screen and (max-width: 1200px) {
		:global(#top_button) {
			position: fixed;
			bottom: 20px;
			right: 20px;
		}
		#content_left {
			width: 100%;
		}
	}
	@media only screen and (min-width: 1200px) {
		#content_left {
			float: left;
			width: 33%;
			top: 0;
			position: fixed;
		}
		#content_right {
			float: right;
			width: 66%;
		}
		:global(#top_button) {
			display: none;
		}
	}
	:global(.aside_section :hover) {
		color: var(--palette-accent);
	}
</style>
