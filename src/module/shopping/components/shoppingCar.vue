<template>
	<div id="shoppingCar">
	    <h1>{{$store.state.title}}</h1>
		<table class="table table-striped">
		  <thead>
		    <tr>
		      <th><input type="checkbox" v-model="allChecked">全选({{checkedCount}})</th>
		      <th>商品图片</th>
		      <th>商品信息</th>
		      <th>商品总价</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="(x,index) in list">
		      <td><input class="test"  type='checkbox' :value="x.totle" v-model="checked"></td>
		      <td><img style="width:80px;height:80px" v-bind:src='x.goodsImg'></td>
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
		<p class="priceTotle">总计：<span>{{totle}}元</span></p>
	</div>
	 
</template>

<script>
import { mapMutations } from 'vuex'
import $ from 'jquery'
export default {
	data () {
		return {
			list:this.$store.state.goodsList,
			checked: [],
			checkedCount:null,
			totle:0
		}
	},
	//定义计算价格总和方法
	methods: {
		getTotle: function(){
			var _totle = 0;
			this.checked.forEach(function(x){
   				_totle += x
   			})	
   			return _totle
		}
	},
	//监听checked变化
	watch: {
		checked: function(){
			this.totle = this.getTotle()
		},
		allChecked: function(){
			this.totle = this.getTotle()
		}
	},
	//计算属性
   	computed: {
   	 //全选
   	 allChecked: {
   	 	get: function(){
	 		if(this.list.length != 0 && this.checkedCount === this.list.length){
	 			return true
	 		}else{
	 			return false
	 		}
   	 	},
   	 	set:function(value){
   	 		if(value){
   	 			 this.checked = this.list.map(function(x) {
		            return x.totle
		         })
   	 		}else{
   	 			this.checked = []
   	 		}
   	 	}
   	 },
   	 //选择个数
     checkedCount: {
      	get: function() {
        	return this.checked.length;
      	}
     }
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
	.priceTotle{
		padding-left: 700px;
		font-weight: bold
	}
</style>





