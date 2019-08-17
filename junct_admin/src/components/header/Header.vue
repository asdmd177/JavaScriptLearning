<template>
	<el-row :gutter="20">
		<el-col :span="1">
			<i @click="rotate" ref="switch" class="el-icon-s-unfold menu-switch"></i>
		</el-col>
		<el-col :span="20">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item 
			  	v-for="(crumb,i) in breadcrumbs">{{crumb.title}}</el-breadcrumb-item>
			</el-breadcrumb>
		</el-col>
		<el-col :span="3">
			<Dropdown>
				<el-avatar :size="50" :src="avatarURL"></el-avatar>
			    <Icon :size="18" type="md-arrow-dropdown"></Icon>
		      	<DropdownMenu slot="list">
		        	<DropdownItem name="logout">退出登录</DropdownItem>
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
			rotate() {
				let switchDOM = this.$refs.switch;
				if(this.rotateFlg){
					switchDOM.style.transform = 'rotate(0deg)';
					//send instruct to menu-component
					this.rotateFlg = false
					this.$eventHub.$emit("menu-collapse",this.rotateFlg)
					//send instruct to Home.vue
					this.$emit("foldAside",this.rotateFlg)
				}else{
					switchDOM.style.transform = 'rotate(90deg)';
					this.rotateFlg = true
					this.$eventHub.$emit("menu-collapse",this.rotateFlg)
					this.$emit("foldAside",this.rotateFlg)
				}
				
			}
		},
		created() {

		}
	}
</script>

<style scoped lang="less">
 @import './Header.less';
</style>