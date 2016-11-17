<template>
<div>
	<div id="shoppingCar">
	    <h1>{{$store.state.title}}</h1>
		<table class="table table-striped">
		  <thead>
		    <tr>
		      <th>
				  <mu-checkbox v-model="allChecked" label="全选" class="demo-checkbox"/>
		      </th>
		      <th>商品图片</th>
		      <th>商品信息</th>
		      <th>商品总价</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="(x,index) in list">
		      <td><input class="test"  type='checkbox' :value="x.totle" v-model="checked">
				<!-- <mu-checkbox :value="x.totle" v-model="checked" class="demo-checkbox"/> -->
		      </td>
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
		<mu-table  :fixedHeader="fixedHeader" :allRowsSelected="enableSelectAll" :multiSelectable="multiSelectable" :selectable="selectable" :showCheckbox="showCheckbox" @rowClick="handleClick">
		    <mu-thead slot="header">
		      <mu-tr>
		        <mu-th tooltip="图片">商品图片</mu-th>
		        <mu-th tooltip="信息">商品信息</mu-th>
		        <mu-th tooltip="价格">商品价格</mu-th>
		      </mu-tr>
		    </mu-thead>
		    <mu-tbody >
		      <mu-tr v-for="(item, index) in list">
		        <mu-td><img style="width:80px;height:80px" v-bind:src='item.goodsImg'></mu-td>
		        <mu-td>
		        	<p>商品名称：{{item.goodsName}}</p>
			      	<p>商品数量：{{item.count}}</p>
			      	<p>商品价格：{{item.price}}元</p>
			      	<p>商品颜色：{{item.color}}</p>
		        </mu-td>
		        <mu-td>{{item.totle}}元</mu-td>
		      </mu-tr>
		    </mu-tbody>
		  </mu-table>
		<p v-show="nothing" class="foot">暂无购买任何商品</p>
		<p class="priceTotle">总计：<span>{{totle}}元</span></p>

	</div>
	 		
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
			totle:0,
			nothing: false,
			fixedHeader: true,
	        selectable: true,
	        multiSelectable: true,
	        enableSelectAll: true,
	        showCheckbox: true
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
		},
		handleClick: function(index,rowid,tr){
			console.log(index,rowid,tr)
			//只返回了某一行的id没有索引值不好处理，已与作者沟通等待更新
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
     },
     nothing: {
     	get: function(){
     		if(this.list.length == 0){
     			return true
     		}else{
     			return false
     		}
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
	.foot{
		margin:50px auto 20px;
		font-size: 20px;
		font-weight: bold;
		text-align: center;
		width: 100%;
	}
	.mt8 {
	  margin-top: 8px;
	}
	.flex-demo {
	  height: 32px;
	  background-color: #e0e0e0;
	  text-align: center;
	  line-height: 32px;
	}
</style>





