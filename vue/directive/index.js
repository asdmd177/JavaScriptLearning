new Vue({
	"el":"#app",
	"directives":{
		"bc":{
			"inserted":function(el,binding){
				console.log(JSON.stringify(binding))
				el.style.backgroundColor = binding.value;
			}
		}
	}
});