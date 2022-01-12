<script>
	import { Container } from '@kahi-ui/framework';
</script>

<Container viewport="widescreen">
    <div id="container">
        <slot />
    </div>
</Container>

<style>
	#container {
		width: 100%;
	}
</style>
