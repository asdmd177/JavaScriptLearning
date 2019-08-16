<!-- 
	功能：主页
	author：fja
	date：2019-08-13
-->

<template>
	<el-container>
		<el-aside :width="isCollapse ? '65px':'200px'">
			<menu-component
				@refresh-breadcrumb="refreshCrumbs($event)"></menu-component>
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
	import menuComponent from '../components/menu/Menu.vue'
	import headerComponent from '../components/header/Header.vue'
	import mainContentComponent from '../components/main/Main.vue'
	import tagsList from '../fake-data/navTagsList.js'
	export default {
		data() {
			return {
				"title":"首页",
				"isCollapse":false,
				"breadcrumbs":[{
					title:"首页"
				}],
				"tagsList":tagsList
			}
		},
		methods:{
			foldAside(isCollapse) {
				this.isCollapse = isCollapse
			},
			refreshCrumbs(data) {
				this.breadcrumbs = [{
					title:"首页"
				}];
				for(let i = 0; i < data.length; i++){
					this.breadcrumbs.push(data[i]);
				}
			}
		},
		components:{
			"menu-component":menuComponent,
			"header-component":headerComponent,
			"main-content-component":mainContentComponent
		},
		created() {
			//listen tag-close event
			this.$eventHub.$on("tag-close",$event =>{
				let tagName = $event;
				let index = this.tagsList.findIndex((tag)=>{
		          return tag.name === tagName
		        });
		        if(tagsList[index].color == 'primary'){
		            this.tagsList[index-1].color = 'primary'
		        }
		        this.tagsList.splice(index,1);
			});

			this.$eventHub.$on("tag-click",$event =>{
				let tagName = $event;
		        for(let i = 0; i < this.tagsList.length; i++){
		          var item = this.tagsList[i];
		          if(item.name == tagName && item.color === 'primary'){
		            break;
		          }else if(item.name == tagName){
		            item.color = 'primary'
		          }else if(item.color === 'primary'){
		            item.color = 'default'
		          }
		        }
			});
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
		padding: 0px !important; 
	}

	#app > .el-container {
		margin-bottom: 40px;
		height:100%;
	}
</style>