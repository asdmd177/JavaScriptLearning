/*
	创建侦听器的方法：
		1.在vm中声明属性watch,值为对象
		2.在watch属性中声明一个函数，函数的名称必须和被侦听的数据的变量名一致
		3.函数有两个默认参数oldValue和newValue，分别对应发生数据变化前的值以及变化后的值
*/
var vm = new Vue({
	el:"#app",
	data:{
		username:''
	},
	methods:{

	},
	watch:{
		username(newValue,oldValue){
			console.log(oldvalue);
			console.log(newValue);
		}
	}
});