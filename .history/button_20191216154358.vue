<template>
	<button @click="handleClick" :style="styles">
		<slot></slot>
	</button>
</template>
<script>
	export default {
		props:{
			color:{
				type:String,
				default:'#00cc66'
			}
		},
		computed:{
			styles:function(){
				return {
					background:this.color
				}
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