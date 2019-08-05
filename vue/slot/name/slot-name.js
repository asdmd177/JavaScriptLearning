Vue.component("child-component",{
	"template":`
		<div>
			<slot></slot>
			<slot name="above"></slot>
			<slot name="middle"></slot>
			<slot name="below"></slot>
		</div>
	`
});

new Vue({
	"el":"#app"
});