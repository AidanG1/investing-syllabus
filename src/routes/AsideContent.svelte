<script>
	import { Aside } from '@kahi-ui/framework';
</script>

<Aside.Container palette="dark" max_width="content-max" height="100">
	<Aside.Header>
		<slot name="header" />
	</Aside.Header>

	<Aside.Section>
		<slot name="content" />
	</Aside.Section>
	<Aside.Footer>
		<a
			aria-label="View the source code"
			href="https://github.com/AidanG1/investing-syllabus"
			target="_blank"
			rel="nofollow noopener noreferrer"
			>Source code <img
				src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FGitHub_logo.png&f=1&nofb=1"
				alt="Github Logo"
				width="30" style="display: inline-block;"
			></a
		>
	</Aside.Footer>
</Aside.Container>

<style>
	@media only screen and (max-width: 1200px) {
		:global(#top_button) {
			position: fixed;
			bottom: 20px;
			right: 20px;
		}
		:global(#content_left) {
			width: 100%;
		}
	}
	@media only screen and (min-width: 1200px) {
		:global(#content_left) {
			float: left;
			width: 33%;
			top: 0;
			position: fixed;
		}
		:global(#content_right) {
			float: right;
			width: 66%;
		}
		:global(#top_button) {
			display: none;
		}
	}
</style>
