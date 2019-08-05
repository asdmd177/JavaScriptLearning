//子组件
Vue.component("child-component",{
	"template": `
		<div class="child">
			<slot></slot>
		</div>
	`
});

var vue = new Vue({
	"el":"#app",
	"data":{

	},
	"methods":{

	}
});