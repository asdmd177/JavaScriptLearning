<!-- 
	Homepage
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
				//welcome page always exist
				"tagsList":[{
					title:'首页',
					color:'primary',
					name:'welcome'	
				}]
			}
		},
		methods:{
			foldAside(isCollapse) {
				this.isCollapse = isCollapse
			},
			refreshCrumbs(data) {
				this.breadcrumbs = [];
				for(let i = 0; i < data.length; i++){
					this.breadcrumbs.push(data[i]);
				}
			},
			addTagsNav(data) {
				//whether tag exist or not
				let index = this.tagsList.findIndex((tag)=>{
					return tag.name == data.name
				})
				if(index != -1){
					return
				}
				//current active tag
				index = this.tagsList.findIndex((tag)=>{
					return tag.color == 'primary'
				})
				this.tagsList[index].color = 'default'
				data.color = 'primary'
				this.tagsList.push(data)
				//TODO link to target page
				//TODO send event to tags-nav.vue to adjust the position
			},
			collectTagsTree2RefreshCrumbs(collection,tagName) {
				if(tagName == 'welcome'){
		        	this.refreshCrumbs([{
						title:'首页',
						color:'primary',
						name:'welcome'	
					}])
		        }else{
			        let array = [];
					reverseTree(collection,tagName,array);
					this.refreshCrumbs(array.reverse());
		        }
			}
		},
		components:{
			"menu-component":menuComponent,
			"header-component":headerComponent,
			"main-content-component":mainContentComponent
		},
		created() {
			//require side-menu data
			var str = window.sessionStorage.getItem("homeMenuData")
			if(str){
				this.menuData = JSON.parse(str)
			}
			//listen tag-close event
			this.$eventHub.$on("tag-close",$event =>{
				let tagName = $event;
				let index = this.tagsList.findIndex((tag)=>{
		          return tag.name === tagName
		        });
		        if(this.tagsList[index].color == 'primary'){
		        	var prevTag = this.tagsList[index-1]
		            prevTag.color = 'primary'
		            //refresh the breadcrumb
		            this.collectTagsTree2RefreshCrumbs(this.menuData[0],prevTag.name)
			    }
			    this.tagsList.splice(index,1);
			});
			//listen tag-click event
			this.$eventHub.$on("tag-click",$event =>{
				let tagName = $event;
		        for(let i = 0; i < this.tagsList.length; i++){
		          var item = this.tagsList[i];
		          if(item.name == tagName && item.color === 'primary'){
		            break;
		          }else if(item.name == tagName){
		            item.color = 'primary'
		            //must use splice to change the length of array to force Vue to detect the prop change
		            this.tagsList.splice(i,1,item)
		          }else if(item.color == 'primary'){
		            item.color = 'default'
		            this.tagsList.splice(i,1,item)
		          }
		        }
		        //refresh breadcrumb
				this.collectTagsTree2RefreshCrumbs(this.menuData[0],tagName)
			});
			//listen tag-close-all event
			this.$eventHub.$on("tag-close-all",$event =>{
				this.tagsList = [{
					title:'首页',
					color:'primary',
					name:'welcome'	
				}]
			});
		}
	};
</script>

<style lang="less" scoped>
	@import './Home.less';
</style>