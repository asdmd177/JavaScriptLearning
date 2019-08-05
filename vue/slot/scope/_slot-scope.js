let childComponent = Vue.extend({
	"template":`
		<div>
			<slot v-for='kid in kids' :kid='kid'></slot>
		</div>
	`,
	"data":function(){
		return {
			"kids":[{
				"name":"太一",
				"gender":1
			},{
				"name":"阿和",
				"gender":1
			},{
				"name":"光子郎",
				"gender":1
			},{
				"name":"素娜",
				"gender":0
			},{
				"name":"美美",
				"gender":0
			},{
				"name":"嘉儿",
				"gender":0
			},{
				"name":"阿助",
				"gender":1
			}]
		};
	}
})



//根据子组件的数据，决定子组件的内容
Vue.component("parent-component",{
	"template":`
		<child-component>
			<template slot-scope='datas'>
				<li class="blue-font" v-if="datas.kid.gender == 0">{{datas.kid.name}}</li>
				<li class="red-font" v-else="datas.kid.gender == 1">{{datas.kid.name}}</li>
			</template>
		</child-component>
	`,
	components:{
		"child-component":childComponent
	}
});


new Vue({
	"el":"#app"
});