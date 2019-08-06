var eventHub = new Vue();


Vue.component("component-tom",{
	"template":`
		<div><div>{{num}}</div>
		<button @click="sendMsg">plus5</button></div>
	`,
	"data":function(){
		return {
			"num":0
		}
	},
	"methods":{
		sendMsg () {
			eventHub.$emit("plus5",5);
		}
	},
	mounted () {
		eventHub.$on("plus10",(val)=>{
			this.num += val;
		});
	}
});

Vue.component("component-jerry",{
	"template":`
		<div><div>{{num}}</div>
		<button @click="sendMsg">plus10</button></div>
	`,
	"data":function(){
		return {"num":0}
	},
	"methods":{
		sendMsg () {
			eventHub.$emit("plus10",10);
		}
	},
	mounted () {
		eventHub.$on("plus5",(val)=>{
			this.num += val;
		});
	}
});

new Vue({
	"el":"#app"
});