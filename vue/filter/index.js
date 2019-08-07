Vue.filter("myfilter",(val,flag)=>{
	var newVal = val;
	//转换成大写
	if(flag){
		newVal = val.toUpperCase();
	}
	//转换成小写
	else {
		newVal = val.toLowerCase();
	}
	return newVal;
});



new Vue({
	"el":"#app",
	"data":{
		"flag":true,
		"content":''
	},
	"methods":{
		upper () { 
			this.flag = true
		},
		lower () {
			this.flag = false
		}
	}
});