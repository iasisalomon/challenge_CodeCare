<template>
	<div class="container-fluid">
		<div class="row justify-content-center align-center">
			<div class="col-auto">
				<input type="text" v-model="itemToAdd" class="form-control" placeholder="Add a new word" />
			</div>
			<div class="col-auto">
				<button class="btn btn-primary mb-3" @click="addItem">Add word</button>
				<button class="btn btn-danger mx-3 mb-3" @click="clearAll">Clear</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		name: 'Lists',
		props: {
			msg: String,
		},
		data() {
			return {
				itemToAdd: null,
			};
		},
		computed: {
			...mapGetters(['getItems']),
		},
		methods: {
			addItem() {
				this.$store.dispatch('addItem', this.itemToAdd);
				this.itemToAdd = null;
			},
			clearAll() {
				this.$store.dispatch('clearAll');
				this.itemToAdd = null;
			},
		},
	};
</script>

<style scoped lang="scss"></style>
