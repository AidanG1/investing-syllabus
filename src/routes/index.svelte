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
	import AsideContent from './AsideContent.svelte';
	import { Button, Divider, Ellipsis, Heading, Text, Aside } from '@kahi-ui/framework';
	export let sections;
	function create_pdf() {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
		setTimeout(() => {
			html2pdf().from(document.getElementById('syllabus')).save('syllabus.pdf');
		}, 500); // make sure fully at top before creating pdf};
	}
	/**
	 * @param {string} id
	 */
	function scroll(id) {
		document.getElementById(id).scrollIntoView({
			block: 'start',
			behavior: 'smooth',
			inline: 'center'
		});
	}
</script>

<svelte:head>
	<title>Syllabus</title>
</svelte:head>

{#await sections}
	<h1>Loading <Ellipsis /></h1>
{:then result}
	<div id="content_left">
		<AsideContent>
			<div slot="header">
				<Heading id="top">Syllabus</Heading>
				<Divider />
				<Button palette="accent" variation="outline" href="schedule">Schedule</Button>
				<Divider />
				<Button palette="accent" variation="outline" on:click={create_pdf}>
					Download the syllabus as a pdf
				</Button>
			</div>
			<div slot="content">
				{#each result.sections_sorted as section}
					<Text>
						<a
							class="aside_section"
							on:click={scroll(`heading_${section.heading.replace(/ /g, '_')}`)}
						>
							{section.heading}
						</a>
					</Text>
				{/each}
			</div>
		</AsideContent>
	</div>
	<div id="content_right">
		<main id="syllabus">
			{#each result.sections_sorted as section}
				<Divider />
				<h1 id="heading_{section.heading.replace(/ /g, '_')}">
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

	:global(.aside_section :hover) {
		color: var(--palette-accent);
	}
</style>
