<template>


<div class="login" id="login" >
	<div class="imgBox">
		<!-- <img class="logo" id="logo" src="../../assets/img/miku.jpg"> -->
		<mu-avatar  :src="wisper" :size='150'/>
		<input class="imgInput" type="file" name="" value="">
		<!-- <div v-if="loginerror" class="font14 loginerror LRShake errorInfo">
			{{loginerror}}
		</div> -->
	</div>
	
	<ul>
		<li class="li-list">
			<!-- <input v-focus class="logininput" v-model="user.Name"  type="text" placeholder="用户名" /> -->
			<mu-text-field 
				hintText="wisper" 
				@input="handleInputN" 
				icon="perm_identity"
				:errorText="errorName"
				v-model="user.Name"
				labelFloat label="Name"
				:dataSource="nameSource"/>
			<!-- <mu-auto-complete v-focus hintText='wisper' @input="handleInputN" openOnFocus :errorText="errorName" v-model="user.Name"  labelFloat label="Name" :dataSource="nameSource" /> -->
		</li>

		<li class="li-list">
			<!-- <i class="iconfont">&#xe6dc;</i>
			<input class="logininput" @keyup.enter="loginAction" v-model="user.PassWord"  type="password" placeholder="密码" />
			<mu-auto-complete hintText='000000' v-model="user.PassWord" @input="handleInputP" @keyup.enter="loginAction" :errorText="errorPass" openOnFocus labelFloat label="PassWord" :dataSource="passWordSource" /> -->
			<mu-text-field 
				hintText="000000" 
				@input="handleInputP"
				@keyup.enter="loginAction" 
				icon="lock"
				:errorText="errorPass"
				v-model="user.PassWord"
				labelFloat label="PassWord"
				:dataSource="passWordSource"/>
		</li>
	</ul>
	<mu-raised-button @click="loginAction" label="登录" class="demo-raised-button login-btn" primary/>
	<mu-dialog v-if="dialog" title="提示信息">
    {{loginerror}}
    <br/>
    <br/>
    <mu-linear-progress />
    	<mu-flat-button label="确定" slot="actions" primary @click="close"/>
 	</mu-dialog>
</div>
</template>
<script>
import Lib from 'assets/Lib.js'
import wisper from 'assets/img/miku.jpg'
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
    	nameSource: ['wisper'],
    	passWordSource: ['000000'],
    	wisper: wisper,
    	dialog: false,
    	errorName: '',
    	errorPass: ''
    }
  },
  mounted: function(){
  	//上传头像
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
				// 两个坑:
				// 1、在设置filter属性时，元素必须已经存在在DOM树中，动态创建的Node，也需要在设置属性前加入到DOM中，先设置属性在加入，无效；
				// 2、src属性需要像下面的方式添加，上面的两种方式添加，无效；
				imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
				imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
			}
		});
  },
  methods: {
	//登录
    loginAction () {
    	if(this.user.Name == ''){
    		this.errorName = '不能一个字都不输入哦'
    	}
    	else if(this.user.PassWord == ''){
    		this.errorPass = '不能一个字都不输入哦'
    	}
		else if(this.user.Name == this.init.Name && this.user.PassWord == this.init.PassWord){
			this.dialog = true
			this.loginerror = "登陆成功,请稍等..."
			window.localStorage.setItem("loginState", true)
			setTimeout(()=>{
				window.location.href = "welcome.html";
			},3000);
		}else{
			this.dialog = true
			this.loginerror = "账号输错了，笨死了！"
			setTimeout(()=>{
				this.dialog = false
			},3000);
			window.localStorage.removeItem("loginState")
		}
	},
	handleInputN () {
		this.errorName = ''	
	},
	handleInputP () {
		this.errorPass = ''
	},
	close () {
      this.dialog = false
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
		height: 190px;
		margin: 0 auto;
		padding-bottom: 40px;
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
		display: block;
	}
</style>





