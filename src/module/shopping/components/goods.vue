<template>
	<div class="vuex">
		<h1>{{$store.state.title}}</h1>
		<div class="content">
			<div class="imgBox" v-bind:style="{borderColor:$store.state.imgBorder}">
				<img class="goodsImg" v-if="$store.state.showNum == index" v-for="(x,index) in $store.state.goodsImg" v-bind:src="x">
			</div>
			<div class="goodsType">
				<div class="btn-group goodsName" data-toggle="buttons">
				    <label v-for="(x, index) in $store.state.goodsName" class="btn btn-primary" >
				        <input @click="changeImg(index)" type="radio" name="options" v-bind:id="'option' + (index+1)" > {{x}}
				    </label>
				</div>
				<div class="btn-group goodsColor" data-toggle="buttons">
				    <label  v-for="(x, index) in $store.state.goodsColor" class="btn btn-primary" >
				        <input @click="changeColor(index)" type="radio" name="options" v-bind:id="'option' + (index+1)" > {{x.text}}
				    </label>
				</div>
				<div class="btn-group goodsPrice" data-toggle="buttons">
				    <label v-for="(x, index) in $store.state.goodsPrice" class="btn btn-primary" >
				        <input @click="changePrice(index)" type="radio" name="options" v-bind:id="'option' + (index+1)" > {{x}}元
				    </label>
				</div>
				<div>
					<button @click="decrement" type='button' class="btn btn-primary">-</button>
					<input type="text" class="form-control numberInput" v-model="$store.state.count"/>
					<button @click="increment" type='button' class="btn btn-primary">+</button>
				</div>
				<div>
					<h4 style='font-weight: bold'>总价：<span  class="totlePirce">{{$store.state.price * $store.state.count}}元</span></h4>
				</div>
				<div>
	
					<button type="button" @click="addShoppingCar" class="btn btn-warning">加入购物车</button>
					<button style="margin:0 30px" type="button"  class="btn btn-danger"><router-link to="/shoppingCar">购物车</router-link></button>
				</div>
			</div>
			<div class="shoppingCar">
				<p></p>
			</div>
		</div>
		
	</div>

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
   	'addShoppingCar'
   	
   ])
}
</script>

<style scoped>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button{
	    -webkit-appearance: none !important;
	    margin: 0; 
	}
	a{
		color: white;
		text-decoration: none;
	}
	a:hover{
		color: white;
		text-decoration: none;
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





