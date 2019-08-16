<!-- 
	侧边栏垂直菜单
	author：fja
	date：2019-08-15
-->
<template>
	<el-menu
		unique-opened
		:collapse="isCollapse"
		background-color="#545c64"
		text-color="#fff"
		active-text-color="#2D8CF0">
		<el-submenu v-for="(menu,i) in menuData" :index="menu.name">
			<template slot="title">
				<i :class="menu.icon"></i>
				<span>{{menu.title}}</span>
			</template>
			<el-menu-item 
				v-for="(subMenu,index) in menu.children"
				@click="clickEvent(subMenu)" 
				v-if="subMenu.children.length == 0" 
				:index="subMenu.name">
				<i :class="subMenu.icon"></i>
				{{subMenu.title}}
			</el-menu-item>
			<el-submenu 
				v-for="(subMenu,index) in menu.children" 
				v-if="subMenu.children.length > 0" 
				:index="subMenu.name">
				<template slot="title">
					<i :class="subMenu.icon"></i>
					{{subMenu.title}}
				</template>
				<el-menu-item 
					v-for="(_subMenu,index) in subMenu.children"
					@click="clickEvent(_subMenu)"
					:index="_subMenu.name">
					<i :class="_subMenu.icon"></i>
					{{_subMenu.title}}
				</el-menu-item>
			</el-submenu>
		</el-submenu>

		<!-- <el-submenu index="1">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>设置</span>
	        </template>
            <el-menu-item index="1-1">用户相关</el-menu-item>
            <el-submenu index="1-4">
          		<template slot="title">系统相关</template>
          		<el-menu-item index="1-4-1">菜单管理</el-menu-item>
          		<el-menu-item index="1-4-1">指令管理</el-menu-item>
        	</el-submenu>
      	</el-submenu> -->
	</el-menu>
</template>

<script>
	import { reverseTree } from '../../util/tools.js'

	export default {
		props:[],
		data() {
			return {
				"menuData":[],
				"isCollapse":false
			}
		},
		"methods":{
			clickEvent(data) {
				let array = [];
				reverseTree(this.menuData[0],data.name,array);
				// console.log(JSON.stringify(array.reverse()));
				//send event to Home.vue 
				this.$emit("refresh-breadcrumb",array.reverse())
				//TODO link to a new page
			}
		},
		created(){
			//require side-menu data
			var str = window.sessionStorage.getItem("homeMenuData")
			if(str){
				this.menuData = JSON.parse(str)
			}
			//listen collapse event
			this.$eventHub.$on("menu-collapse",$event=>{
				this.isCollapse = $event;
			});
		}
	}
</script>

<style lang="less" scoped>
	@import './Menu.less';
</style>