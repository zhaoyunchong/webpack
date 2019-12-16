<template>
	<div>
		<v-title title="vue组件化"></v-title>
		<v-button @click="handleClick">点击按钮</v-button>
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