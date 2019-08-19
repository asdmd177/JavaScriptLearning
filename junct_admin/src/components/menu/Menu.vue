<!-- 
	垂直侧边栏
	@author：fja
	@date：2019-08-15
-->
<template>
	<el-menu
		router
		unique-opened
		ref="asideMenu"
		:collapse="isCollapse"
		:default-active="$route.name"
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
				@click="handleClick(subMenu)" 
				v-if="subMenu.children && subMenu.children.length == 0" 
				:index="subMenu.name">
				<i :class="subMenu.icon"></i>
				{{subMenu.title}}
			</el-menu-item>
			<el-submenu 
				v-for="(subMenu,index) in menu.children" 
				v-if="subMenu.children && subMenu.children.length > 0" 
				:index="subMenu.name">
				<template slot="title">
					<i :class="subMenu.icon"></i>
					{{subMenu.title}}
				</template>
				<el-menu-item 
					v-for="(_subMenu,index) in subMenu.children"
					@click="handleClick(_subMenu)"
					:index="_subMenu.name">
					<i :class="_subMenu.icon"></i>
					{{_subMenu.title}}
				</el-menu-item>
			</el-submenu>
		</el-submenu>
	</el-menu>
</template>

<script>
	import { reverseTree } from '../../util/tools.js'

	export default {
		props:["menuData"],
		data() {
			return {
				"isCollapse":false
			}
		},
		"methods":{
			handleClick(data) {
				let array = [];
				reverseTree({
					children:this.menuData
				},data.name,array);
				//刷新面包屑
				this.$emit("refresh-breadcrumb",array.reverse())
				//增加新的导航页签
				this.$emit("add-tags-nav",data)
			}
		},
		created(){
			//listen collapse event
			this.$eventHub.$on("menu-collapse",$event=>{
				this.isCollapse = $event;
			});
		}
	};
</script>

<style lang="less" scoped>
	@import './Menu.less';
</style>