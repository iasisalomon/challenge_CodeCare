<template>
	<div class="container-fluid">
		<div class="row text-center align-center">
			<h1>CodeCare Challenge</h1>
			<p>
				Create a program that will read the standard input line by line and will print lines from the input that has any character in it appearing
				exactly two times.
			</p>
			<ListInput />
			<div class="row justify-content-center text-center align-center">
				<div class="col-auto">
					<FeaturedList title="All added words" />
				</div>
				<div class="col-auto">
					<FeaturedList title="Words with repeated letters" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import ListInput from '@/components/ListInput.vue';
	import FeaturedList from '@/components/FeaturedList.vue';

	export default {
		name: 'Home',
		components: {
			ListInput,
			FeaturedList,
		},
	};
</script>
