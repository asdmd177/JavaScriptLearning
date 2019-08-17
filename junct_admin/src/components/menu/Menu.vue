<!-- 
	vertical side menu
	@author：fja
	@date：2019-08-15
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
				@click="handleClick(subMenu)" 
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
				reverseTree(this.menuData[0],data.name,array);
				// console.log(JSON.stringify(array.reverse()));
				//send event to Home.vue 
				this.$emit("refresh-breadcrumb",array.reverse())
				this.$emit("add-tags-nav",data)
				//TODO link to a new page
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