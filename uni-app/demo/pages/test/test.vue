<template>
	<view class="">
		<view v-bind:class="{active:bool}">{{msg}}</view>
		<button @click="clickHandler">btn</button>
		<view v-if="bool">条件显示</view>
		<view v-for="(item,index) in friends" :key="index">{{item}}</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg:"hello world",
				bool:true,
				friends:["小明", "李华", "韩梅梅"]
			};
		},
		methods:{
			clickHandler(){
				// console.log(123);
				this.msg = Date.now()
				this.bool = !this.bool
			},
		},
		onLoad() {
			console.log(132);
			uni.request({
				url:"https://api.kele8.cn",
				success(res) {
					console.log(res);
				}
			})
		}
	}
</script>

<style lang="less">

</style>
