<!-- 
	主页
	@author：fja
	@date：2019-08-13
-->

<template>
	<el-container>
		<el-aside :width="isCollapse ? '65px':'200px'">
			<menu-component
				:menuData="menuData"
				@refresh-breadcrumb="refreshCrumbs($event)"
				@add-tags-nav="addTagsNav($event)"></menu-component>
		</el-aside>
		<el-container>
			<el-header>
				<header-component 
					:breadcrumbs="breadcrumbs"
					@foldAside="foldAside($event)"></header-component>
			</el-header>
			<el-main>
				<main-content-component :tagsList="tagsList"></main-content-component>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import menuComponent from '../../components/menu/Menu.vue'
	import headerComponent from '../../components/header/Header.vue'
	import mainContentComponent from '../../components/main/Main.vue'
	import { reverseTree } from '../../util/tools.js'
	//import tagsList from '../fake-data/navTagsList.js'

	export default {
		data() {
			return {
				"title":"首页",
				"isCollapse":false,
				"breadcrumbs":[{
					title:"首页"
				}],
				"menuData":[],
				//默认欢迎页面一直存在
				"tagsList":[{
					title:'首页',
					color:'primary',
					name:'welcome',
					path:'/welcome'		
				}]
			}
		},
		methods:{
			//折叠侧边菜单栏
			foldAside(isCollapse) {
				this.isCollapse = isCollapse
			},
			refreshCrumbs(data) {
				this.breadcrumbs = [];
				for(let i = 0; i < data.length; i++){
					this.breadcrumbs.push(data[i]);
				}
			},
			//将激活状态的标签，转变为非激活状态
			unactiveTargetTag(){
				let activeIndex = this.tagsList.findIndex((tag)=>{
					return tag.color == 'primary'
				})
				let item = this.tagsList[activeIndex];
				item.color = 'default'
				this.tagsList.splice(activeIndex,1,item)
			},
			//菜单因为设置了router属性，因此会自动跳转到对应页面
			addTagsNav(data) {
				//点击的菜单是否已经存在于导航标签栏中
				let clickIndex = this.tagsList.findIndex((tag)=>{
					return tag.name == data.name
				})
				this.unactiveTargetTag()
				//存在
				if(clickIndex != -1){
					let item = this.tagsList[clickIndex];
					item.color = 'primary'
					this.tagsList.splice(clickIndex,1,item)
				}
				//不存在
				else{
					data.color = 'primary'
					this.tagsList.push(data)
				}
				//TODO 发送事件给tags-nav.vue组件调整左右的位置
			},
			//递归遍历菜单数据，找到标签对应的所有父元素
			collectTagsTree2RefreshCrumbs(collection,tagName) {
				if(tagName == 'welcome'){
					let array = [{
						title:'首页',
						color:'primary',
						name:'welcome',
						path:'/welcome'	
					}]
		        	this.refreshCrumbs(array)
		        	return array;
		        }else{
			        let array = [];
					reverseTree(collection,tagName,array);
					this.refreshCrumbs(array.reverse());
					return array;
		        }
			}
		},
		components:{
			"menu-component":menuComponent,
			"header-component":headerComponent,
			"main-content-component":mainContentComponent
		},
		created() {
			//获取侧边栏菜单的数据
			var str = window.sessionStorage.getItem("homeMenuData")
			if(str){
				this.menuData = JSON.parse(str)
			}

			//TODO 通过url进行页面的跳转，这里只能采取sessionStorage的方法，后期优化
			let tagInUrl = window.sessionStorage.getItem("tagInUrl");
			window.sessionStorage.removeItem("tagInUrl");
			if(tagInUrl){
				let tagJSON = JSON.parse(tagInUrl)
				let array = this.collectTagsTree2RefreshCrumbs({
					"children":this.menuData
				},tagJSON.name)
				this.unactiveTargetTag()
				//面包屑的行列是从父到子，因此末尾就是目标标签
				let tag = array[array.length-1];
				tag.color = 'primary'
				this.tagsList.push(tag);
			}

			//侦听标签关闭事件
			this.$eventHub.$on("tag-close",$event =>{
				let tagName = $event;
				let index = this.tagsList.findIndex((tag)=>{
		          return tag.name === tagName
		        });
		        if(this.tagsList[index] && this.tagsList[index].color == 'primary'){
		        	var prevTag = this.tagsList[index-1]
		            if(prevTag)prevTag.color = 'primary'
		            //刷新面包屑
		            this.collectTagsTree2RefreshCrumbs({
						"children":this.menuData
					},prevTag.name)
		            this.$router.push(prevTag.path)
			    }
			    this.tagsList.splice(index,1);
			});
			//侦听标签点击事件
			this.$eventHub.$on("tag-click",$event =>{
				let tagName = $event;
				console.log(tagName)
		        for(let i = 0; i < this.tagsList.length; i++){
		          var item = this.tagsList[i];
		          if(item.name == tagName && item.color === 'primary'){
		            break;
		          }else if(item.name == tagName){
		            item.color = 'primary'
		            //Vue无法侦测到数组中对象的属性变化，因此通过splice改变数组的长度
		            this.tagsList.splice(i,1,item)
		          }else if(item.color == 'primary'){
		            item.color = 'default'
		            this.tagsList.splice(i,1,item)
		          }
		        }
		        //刷新breadcrumb
				this.collectTagsTree2RefreshCrumbs({
					"children":this.menuData
				},tagName)
				//跳转
				this.$router.push('/'+tagName);
			});
			//侦听tags-nav关闭所有标签的事件
			this.$eventHub.$on("tag-close-all",$event =>{
				//导航标签栏初始化
				this.tagsList = [{
					title:'首页',
					color:'primary',
					name:'welcome',
					path:'/welcome'		
				}]
				this.$router.push('/welcome')
				//刷新面包屑
				this.collectTagsTree2RefreshCrumbs({
					"children":this.menuData
				},'welcome')
			});
		}
	};
</script>

<style lang="less" scoped>
	@import './Home.less';
</style>