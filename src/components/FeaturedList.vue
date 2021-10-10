<template>
	<div class="card" style="width: 18rem;">
		<div class="card-header">
			{{ title }}
		</div>
		<ul class="list-group list-group-flush">
			<li v-for="(item, index) in getItems" :key="item + index" class="list-group-item">{{ item }}</li>
		</ul>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		props: {
			title: {
				type: String,
				default: 'This is the title',
			},
		},
		computed: {
			...mapGetters(['getItems']),
		},
	};
</script>

<style></style>
