<template>
	<h1>
		<a :href="`#`+title">{{title}}</a>
		hello world
	</h1>
</template>
<script>
	export default {
		props:{
			title:{
				type:String
			}
		}
	}
</script>
<style scoped>
	h1 a{
		color:#3399ff;
		font-size: 24px;
		text-decoration: none;
	}
</style>