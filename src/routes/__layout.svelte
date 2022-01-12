<script>
	import { Container } from '@kahi-ui/framework';
	import '@kahi-ui/framework/dist/kahi-ui.framework.min.css';
</script>

<Container viewport="widescreen" id="container">
	<div id="container">
		<slot />
	</div>
</Container>

<style>
	#container {
		width: 100%;
	}
</style>
