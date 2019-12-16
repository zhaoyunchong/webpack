<template>
	<div>
		
	</div>
</template>
<script>
	import vTitle from './title.vue';
	import vButton from './button.vue';
	export default {
		components:{
			vTitle,
			vButton
		},
		data(){
			return {
				name:'Hello World'
			}
		}
	}
</script>
<style scoped>
	div{
		color:#f00;
		font-size:24px;
	}
</style>