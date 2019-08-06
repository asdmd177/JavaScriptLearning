Vue.component("child",{
	"props":["title"],
	"template":`
 		<div>{{title}}</div>
	`
});

new Vue ({
	"el":"#app",
	"data":{
		"title":"这是父组件传递给子组件的标题"
	}
});