<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch }) {
		const url = '/api/get_schedule';
		const res = await fetch(url);
		if (res.ok) {
			return {
				props: {
					schedule: await res.json()
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
	import { jsPDF } from 'jspdf';
	import AsideContent from './AsideContent.svelte';
	import '@kahi-ui/framework/dist/kahi-ui.framework.min.css';
	import { Button, Divider, Heading, Text, Aside } from '@kahi-ui/framework';

	export let schedule;
	function create_pdf() {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
		setTimeout(() => {
			html2pdf().from(document.getElementById('schedule')).save('schedule.pdf');
		}, 500); // make sure fully at top before creating pdf};
	}
	function doc_pdf() {
		const doc = new jsPDF();
		doc.html(document.getElementById('schedule'), {
			callback: function (doc) {
				doc.save('schedule.pdf');
			}
		});
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
	<title>Schedule</title>
</svelte:head>

<div id="content_left">
	<AsideContent>
		<div slot="header">
			<Heading id="top">Schedule</Heading>
			<Divider />
			<Button palette="accent" variation="outline" href="/">Syllabus</Button>
			<Divider />
			<!-- <Button palette="accent" variation="outline" on:click={doc_pdf}>Text PDF</Button>
			<Divider /> -->
			<Button palette="accent" variation="outline" on:click={create_pdf}>
				Download the schedule as a pdf
			</Button>
		</div>
		<div slot="content">
			{#each schedule.schedule as meeting}
				<Text>
					<a
						on:click={scroll(`heading_${meeting.date_string.replace(/ /g, '_')}`)}
						class="aside_section"
					>
						{meeting.date_string}
					</a>
				</Text>
			{/each}
		</div>
	</AsideContent>
</div>
<div id="content_right">
	<main id="schedule">
		{#each schedule.schedule as meeting}
			<Divider />
			<h1 id="heading_{meeting.date_string.replace(/ /g, '_')}">
				{meeting.date_string}
			</h1>
			<Text>{@html meeting.plan}</Text>
		{/each}
	</main>
</div>
