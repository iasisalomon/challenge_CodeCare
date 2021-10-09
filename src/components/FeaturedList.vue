<template>
	<div class="card" style="width: 18rem;">
		<div class="card-header">
			{{ title }}
		</div>
		<ul class="list-group list-group-flush">
			<li v-for="item in items" :key="item" class="list-group-item">{{ item }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: 'This is the title',
			},
			items: {
				type: Array,
				default: [],
			},
		},
	};
</script>

<style></style>
