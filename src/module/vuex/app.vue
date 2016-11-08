<template>
    <router-view class="view" keep-alive></router-view>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
   methods: mapMutations([
   	'changeImg',
   	'changeColor',
   	'changePrice',
   	'decrement',
   	'increment',
   	'addShoppingCar',
   	'goShopping'
   ])
}
</script>

<style scoped>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button{
	    -webkit-appearance: none !important;
	    margin: 0; 
	}
	.vuex{
		width: 700px;
		margin: 50px auto;
	}
	.vuex h1{
		text-align: center;
	}
	.content{
		position: relative;
	}
	.goodsImg{
		width: 300px;
		height: 300px;
	}
	.imgBox{
		width: 310px;
		height: 310px;
		border: 5px solid black;
		float: left;
		position: absolute;
		top: 0;
		left: 0;
	}
	.goodsType{
		float: right;
		width: 300px;
		padding-top: 20px;
		border: 1px solid black;
	}
	.goodsType div{
		margin: 20px;
	}
	.goodsType label{
		margin:0 10px;
	}
	.numberInput{
		width: 60px;
		text-align: center;
		display: inline-block;
	}
	.totlePirce{
		color: red;
	}
</style>





