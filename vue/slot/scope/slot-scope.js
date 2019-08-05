let childComponent = Vue.extend({
	"template":`
		<div>
			<slot :kids='kids'></slot>
		</div>
	`,
	"data":function(){
		return {
			"kids":["太一","阿和","嘉儿","阿武","素娜","阿助","美美","光子郎"]
		};
	}
})



//根据子组件的数据，决定子组件的内容
Vue.component("parent-component",{
	"template":`
		<child-component>
			<template slot-scope='datas'>
				<li v-for='kid in datas.kids'>{{kid}}</li>
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