<template>
	<div class="container-fluid">
		<form class="row justify-content-center align-center">
			<div class="col-auto">
				<label for="staticEmail2" class="visually-hidden">Email</label>
				<input type="text" class="form-control" id="staticEmail2" placeholder="Add a new word" />
			</div>
			<div class="col-auto">
				<button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'Lists',
		props: {
			msg: String,
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
