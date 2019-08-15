<!-- 
	功能：主页
	author：fja
	date：2019-08-13
-->

<template>
	<el-container>
		<el-aside :width="isCollapse ? '65px':'200px'">
			<menu-component></menu-component>
		</el-aside>
		<el-container>
			<el-header>
				<header-component 
					:breadcrumbs="breadcrumbs"
					@foldAside="foldAside($event)"></header-component>
			</el-header>
			<el-main>Main</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import menuComponent from './menu/Menu.vue'
	//import menuComponent from './menu/Menu-Iview.vue'
	import headerComponent from './header/Header.vue'
	export default {
		data() {
			return {
				"title":"首页",
				"isCollapse":false,
				"breadcrumbs":[{
					title:"首页"
				},{
					"title":"系统设置"
				}]
			}
		},
		methods:{
			foldAside(isCollapse) {
				this.isCollapse = isCollapse
			}
		},
		components:{
			"menu-component":menuComponent,
			"header-component":headerComponent
		},
		created() {
		
		}
	}
</script>

<style lang="less" scoped>
	.el-header {
		background-color: #FFF;
		text-align: center;

		.menu-switch{
			float: left;
		    font-size: 30px;
		    margin-top: 10px;
		    cursor:pointer;
		    transition: all 0.5s;
		}
	}

	.el-aside {
		background-color: #D3DCE6;
		text-align: center;
		
		.el-menu{
			height:100%;
		}
	}

	.el-main {
		background-color: #E9EEF3;
		text-align: center;
	}

	#app > .el-container {
		margin-bottom: 40px;
		height:100%;
	}
</style>