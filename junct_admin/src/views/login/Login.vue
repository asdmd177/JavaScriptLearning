<!-- 
	功能：登录
	author：fja
	date：2019-08-13
-->

<template>
	<div class="login-component">
		<el-card class="box-card">
			<span class="login-slogan">junct_admin管理后台</span>
    		<el-divider></el-divider>
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
	import menuDatas from '../../fake-data/homeMenuData'

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
				 		//登陆，获取令牌
				 		this.$http({method:"post",url:"login/check",
		                    params:{
					 			username:this.loginForm.username,
					 			password:this.$md5(this.loginForm.password)
					 		}
		                }).then(res => {
		                	let { data } = res;
		                	//成功
		                	if(data.code == 0){
								window.sessionStorage.setItem('token',data.token)
								window.sessionStorage.setItem('homeMenuData',JSON.stringify(data.menu))
		                		this.$router.push('/home');
		                	}
		                	//验证失败
		                	else{
		                		this.$msg(data.message)
		                	}
				 		}).catch((error) => {
		                    this.$msg(error)
		                });
				 	}else{
				 		return valid;
				 	}
				});
			}
		}
	};
</script>

<style lang="less" scoped>
	@import './Login.less';
</style>