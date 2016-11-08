<template>


<div class="login" id="login" >
	<img class="logo" src="../../assets/img/miku.jpg">
	<p></p>
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
	.logo{
		width: 150px;
		height: 150px;
		display: block;
		margin: 0 auto;
		border-radius: 50%;
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





