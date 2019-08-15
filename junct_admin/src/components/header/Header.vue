<template>
	<el-row :gutter="20">
		<el-col :span="2">
			<i @click="rotate" ref="switch" class="el-icon-s-unfold menu-switch"></i>
		</el-col>
		<el-col :span="19">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item 
			  	v-for="(crumb,i) in breadcrumbs">{{crumb.title}}</el-breadcrumb-item>
			</el-breadcrumb>
		</el-col>
		<el-col :span="3">
			<el-avatar :size="50" :src="avatarURL"></el-avatar>
		</el-col>
	</el-row>
</template>

<script>
	import avatar from '../../assets/logo.png'
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
	.menu-switch{
		float: left;
	    font-size: 30px;
	    margin-top: 15px;
	    cursor:pointer;
	    transition: all 0.5s;
	}
	.el-icon-arrow-right::before {
	    color: #000000 !important;
	}
	.el-breadcrumb{
		margin-top: 22px
	}
</style>