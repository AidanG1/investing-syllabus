<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch }) {
		const url = '/api/get_content';
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
	export let sections;
	let create_pdf = function () {};
	onMount(async () => {
		create_pdf = function () {
			html2pdf().from(document.getElementById('syllabus')).save('syllabus.pdf')
		};
	});
</script>

{#await sections}
	<h1>loading...</h1>
{:then result}
	<button on:click={create_pdf}>Download the syllabus as a pdf</button>
	<div id="syllabus">
		{#each result.content as section}
			<h1 id="heading_{section.heading}">{section.heading}</h1>
			<div>{@html section.content}</div>
		{/each}
	</div>
{/await}

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    :global(h1, h2, p) {
        font-family: 'Roboto', sans-serif;
    }
</style>
