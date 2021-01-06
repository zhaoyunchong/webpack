<template>
	<div>
		<v-title title="vue组件化"></v-title>
		<v-button @click="handleClick">点击按钮</v-button>
		<p>
			<img src="images/img.png" alt="">
		</p>
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
		methods:{
			handleClick:function(e){
				console.log(e);
				console.log('hello world');
				console.log('整个')
			},
			created(){
				console.log('hello woorld')
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