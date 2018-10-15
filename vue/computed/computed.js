/*
	计算属性的使用：
		1. 在vm中声明computed的属性，值为对象
		2. 在对象中声明一个函数，函数名可以随便写
		3. 将函数名和vue指令配合使用
*/
var vm = new Vue({
	el:"#app",
	data:{
		firstName:'',
		lastName:''
	},
	methods:{

	},
	computed:{
		fullName(){
			return this.firstName + " " + this.lastName;
		}
	}
});