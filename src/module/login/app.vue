<template>


<div class="login" id="login" >
	<div class="imgBox">
		<img class="logo" id="logo" src="../../assets/img/miku.jpg">
		<input class="imgInput" type="file" name="" value="">
	</div>
	<div v-if="loginerror" class="font12 loginerror LRShake">
		{{loginerror}}
	</div>
	<ul>
		<li class="li-list">
			<i class="iconfont">&#xe624;</i>
			<input v-focus class="logininput" v-model="user.Name"  type="text" placeholder="用户名" />
		</li>

		<li class="li-list">
			<i class="iconfont">&#xe6dc;</i>
			<input class="logininput" @keyup.enter="loginAction" v-model="user.PassWord"  type="password" placeholder="密码" />
		</li>
	</ul>
	<button class="login-btn"  @click="loginAction">登录</button>
</div>
</template>
<script>
import Lib from 'assets/Lib.js'
import AA from 'assets/aa.js'
import $ from 'jquery'
export default {
  data () {
    return {
    	user:{
    		Name:'',
    		PassWord:''
    	},
    	init:{
    		Name:this.$store.state.appName,
    		PassWord:this.$store.state.appPass
    	},
    	loginerror:'',
    }
  },
  mounted: function(){
  	$(".imgInput").change(function() {
			var $file = $(this);
			var fileObj = $file[0];
			var windowURL = window.URL || window.webkitURL;
			var dataURL;
			var $img = $(".logo");
			 
			if(fileObj && fileObj.files && fileObj.files[0]){
				dataURL = windowURL.createObjectURL(fileObj.files[0]);
				$img.attr('src',dataURL);
			}else{
				dataURL = $file.val();
				var imgObj = document.getElementById("logo");
				imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
				imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
			}
		});
  },
  methods: {
	//登录
    loginAction () {
    	AA();
		if(this.user.Name == this.init.Name && this.user.PassWord == this.init.PassWord){
			this.loginerror = "登陆成功,请稍等...";
			window.localStorage.setItem("loginState", true)
			setTimeout(()=>{
				window.location.href = "welcome.html";
			},1000);
		}else{
			this.loginerror = "账户错误";
			window.localStorage.removeItem("loginState")
			setTimeout(()=>{
				this.loginerror = ""
			},1000);
		}
	}
  },
  //自定义指令
  directives: {
	focus: {
	    inserted: function (el) {
		    el.focus()
		}
	}
  }
}
</script>

<style scoped>
	*{margin:0;padding:0;}
	ul,li{list-style: none}
	.login{
		width: 600px;
		margin:50px auto;
	}
	.imgBox{
		width: 150px;
		height: 150px;
		margin: 0 auto;
		position: relative
	}
	.logo{
		width: 150px;
		height: 150px;
		border-radius: 50%;
		position: absolute;
		top: 0;
		left: 0;
	}
	.imgInput{
		width: 150px;
		height: 150px;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0
	}
	.logininput{
		font-size: 16px;
		height: 40px;
		border: 1px solid #ddd;
		width: 100%;
		text-align: center;
		border-radius: 100px;
		/*font-weight: bold;*/
		color: #888;
	}
	.loginerror{
		color: #FF3B30;
		padding: 10px 0;
		text-align: center;
	}
	.li-list{
		margin: 10px 0;
		text-align: center;
	}
	.login-btn{
		margin: 20px auto;
		width: 80px;
		border: 0;
		line-height: 24px;
		font-size: 18px;
		text-align: center;
		display: block;
	}
</style>





