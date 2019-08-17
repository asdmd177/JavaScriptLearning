<!-- 
	header
	@author fja
	@date 2019-08-10
-->
<template>
	<el-row :gutter="20">
		<el-col :span="1">
			<i @click="handleRotate" ref="switch" class="el-icon-s-unfold menu-switch"></i>
		</el-col>
		<el-col :span="21">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item 
			  	v-for="(crumb,i) in breadcrumbs">{{crumb.title}}</el-breadcrumb-item>
			</el-breadcrumb>
		</el-col>
		<el-col :span="2">
			<Dropdown>
				<el-avatar :size="50" :src="avatarURL"></el-avatar>
			    <Icon :size="18" type="md-arrow-dropdown"></Icon>
		      	<DropdownMenu slot="list">
		        	<DropdownItem name="logout" @click.native="handleLogout">退出登录</DropdownItem>
		      	</DropdownMenu>
	      	</Dropdown>
		</el-col>
	</el-row>
</template>

<script>
	import avatar from '../../assets/img/admin-avatar.jpg'

	export default {
		props:["breadcrumbs"],
		data() {
			return {
				"avatarURL":avatar,
				"rotateFlg":false
			}
		},
		methods:{
			handleRotate() {
				let switchDOM = this.$refs.switch;
				if(this.rotateFlg){
					switchDOM.style.transform = 'rotate(0deg)';
					//send instruct to menu-component
					this.rotateFlg = false
					this.$eventHub.$emit("menu-collapse",this.rotateFlg)
					//send instruct to Home.vue
					this.$emit("foldAside",this.rotateFlg)
				}else{
					//rotate the switch icon
					switchDOM.style.transform = 'rotate(90deg)';
					this.rotateFlg = true
					this.$eventHub.$emit("menu-collapse",this.rotateFlg)
					this.$emit("foldAside",this.rotateFlg)
				}
				
			},

			handleLogout() {
				this.$confirm('是否退出登录?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'info'
		        }).then(() => {
		          	//clear token
					window.sessionStorage.removeItem('token')
					//redirect to login
					this.$router.push('/login')
		        }).catch(() => {});
			}
		},
		created() {

		}
	};
</script>

<style scoped lang="less">
 @import './Header.less';
</style>