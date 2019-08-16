<!-- 
	功能：登录
	author：fja
	date：2019-08-13
-->

<template>
	<div class="login-component">
		<el-card class="box-card">
			<el-form ref="loginForm" :model="loginForm" :rules="rules">
			  	<el-form-item prop="username">
			    	<el-input v-model="loginForm.username">
			    		<i slot="prefix" class="icon iconfont icon-xingmingyonghumingnicheng"></i>
			    	</el-input>
			 	 </el-form-item>
			 	 <el-form-item prop="password">
			 	 	<el-input v-model="loginForm.password" show-password>
			 	 		<i slot="prefix" class="icon iconfont icon-mima"></i>
			 	 	</el-input>
			 	 </el-form-item>
			  	<el-form-item class="btnContainer">
			    	<el-button @click="login" type="primary">登录</el-button>
			    	<el-button @click="reset">重置</el-button>
			  	</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script>
	import menuDatas from '../fake-data/homeMenuData'

	export default {
		data() {
			return {
				"loginForm":{
					"username":"",
					"password":""
				},
				"rules":{
					"username":[{
						  validator: (rule, value, callback)=>{
						 	if(!value){
						 		return callback(new Error("请输入用户名"))
						 	}else{
						 		callback()
						 	}
						 }, trigger: 'blur' 
					}],
					"password":[{
						validator:(rule, value, callback)=>{
							if(!value) {
								return callback(new Error("请输入密码"))
							}else{
						 		callback()
						 	}
						},trigger:'blur'
					}]
				}
			}
		},
		methods:{
			//重置
			reset() {
				this.$refs.loginForm.resetFields();
			},
			login() {
				//valid
				this.$refs.loginForm.validate((valid)=>{
				 	if(valid){
				 		//模拟登陆，获取令牌
				 		if(this.loginForm.username=='admin' && this.loginForm.password == 1){
							window.sessionStorage.setItem('token','1')
							window.sessionStorage.setItem('homeMenuData',JSON.stringify(menuDatas))
							this.$router.push('/home');
				 		}else{
				 			this.$msg("用户名密码验证失败")
				 		}
				 	}else{
				 		return valid;
				 	}
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.login-component{
		height:100%;
		background-image: url(../assets/img/login-bg-b.jpg);
		background-size: cover;
	}
	.el-card{
		width:350px;
		position: absolute;
		text-align: center;
		opacity: .9;
		top:50%;
		right:0px;
		transform:translate(-50%,-50%);
		.el-input{
			width:300px;
		}
		.btnContainer{
			margin: 0px;
		}
	}
</style>