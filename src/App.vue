<template>
	<div id="app">
		<div class="container-fluid">
			<Nav />
			<router-view />
		</div>
	</div>
</template>

<script>
	import Nav from '@/components/Nav';

	export default {
		components: { Nav },
	};
</script>
