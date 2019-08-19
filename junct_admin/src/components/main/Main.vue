<!-- 
	页面主体
	author：fja
	date 2019-8-12
-->
<template>
	<div>
		<tags-nav :tagsList="tagsList"></tags-nav>
		<div class="main-content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import TagsNav from '../tags-nav/tags-nav.vue'

	export default {
		props:["tagsList"],
		data() {
			return {

			}
		},
		components:{
			"tags-nav":TagsNav
		},
		methods:{

		},
		create(){

		}
	};
</script>


<style lang="less">
	@import './Main.less';
</style>