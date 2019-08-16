<template>
	<div>
		<tags-nav :tagsList="tagsList"></tags-nav>
		<router-view></router-view>
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