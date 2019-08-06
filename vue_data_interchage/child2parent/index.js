Vue.component('child',{
	"template":`
		<button @click="sendMsg">字体放大</button>
	`,
	"methods":{
		sendMsg () {
			this.$emit("enlarge",10);
		}
	}
});
new Vue({
	"el":"#app",
	"data":{
		"fontSize":5,
		"title":"这是标题，注意字体大小"
	},
	"methods":{
		enlargeFont(fontSize){
			this.fontSize += fontSize;
			console.log(this.fontSize);
		}
	}
});