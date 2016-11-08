<template>
	<div id="shoppingCar">
	    <h1>{{$store.state.title}}</h1>
		<table class="table table-striped">
		  <thead>
		    <tr>
		      <th>商品图片</th>
		      <th>商品信息</th>
		      <th>商品总价</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="(x,index) in $store.state.goodsList">
		      <td>Tanmay</td>
		      <td>
		      	<p>商品名称：{{x.goodsName}}</p>
		      	<p>商品数量：{{x.count}}</p>
		      	<p>商品价格：{{x.price}}元</p>
		      	<p>商品颜色：{{x.color}}</p>
		      </td>
		      <td>{{x.totle}}元</td>
		    </tr>
		    
		  </tbody>
		</table>
	</div>

</template>

<script>
import { mapMutations } from 'vuex'
export default {
	
   methods: mapMutations([
   ]),
   mounted: function(){
      this.$store.state.goodsList = JSON.parse(window.localStorage.getItem("goodsList"))
  }
}
</script>

<style scoped>
	#shoppingCar{
		width: 1000px;
		border: 2px solid black;
		padding: 20px 50px;
		margin: 50px auto;
	}
</style>





