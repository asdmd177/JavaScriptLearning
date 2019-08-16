<template>
	<div>
		<tags-nav></tags-nav>
		<router-view></router-view>
	</div>
</template>

<script>
	import TagsNav from '../tags-nav/tags-nav.vue'

	export default {
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