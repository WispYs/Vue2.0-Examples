<template>
	<div class="route">
		<h1>{{$store.state.title}}</h1>
		<!-- <div class="left">
			<ul>
		        <li><router-link to="/wow" replace>Wow</router-link></li>
		        <li><router-link to="/dota" replace>Dota</router-link></li>
		    </ul>
		</div>
		<div class="right">
			<router-view class="view" keep-alive></router-view>
		</div>   -->
		<mu-tabs :value="$store.state.activeTab" @change="handleTabChange">
		  <mu-tab value="tab1" icon="grade" title="Dota"/>
		  <mu-tab value="tab2" icon="donut_large" title="WOW"/>
		</mu-tabs>
		<div>
			<router-view class="view" keep-alive></router-view>
		</div>  
	</div>
</template>
<script>
import dota from './components/dota'
import wow from './components/wow'
export default {
  components: {
  	wow,
    dota
  },
  methods: {
    handleTabChange (val) {
      this.$store.state.activeTab = val
      if(val == "tab1"){
      	this.$router.replace({ path: '/dota' })
      }else if(val == "tab2"){
      	this.$router.replace({ path: '/wow' })
      }
      
    }
  }
}
</script>
<style scoped>
ul,li{
	list-style:none;
}
.route{
	width:600px;
	margin:20px auto;
	overflow:hidden;
	text-align: center;
}
.left{
	padding-top:30px;
	width:150px;
	float:left
}
.left a{
	text-decoration: none;
	color:black;
	line-height:30px;
	padding:10px 15px;
	width:120px;
	font-size:20px;
	display:block;
	border:1px solid #999;
	text-align:left;
}
.right{
	text-align: center;
	width:450px;
	float:left
}
</style>