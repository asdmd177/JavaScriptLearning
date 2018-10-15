/*
	创建组件：
		1.使用Vue.extend()方法创建组件
		2.extend()方法接收一个参数，参数是对象，用于配置组件。对象的参数个new Vue()时传入
		  的参数类似，也有mounted，data，methods。template属性中添加html的模板
		3.extend()方法返回组件对象。

	全局注册组件：
		1.使用Vue.component()方法注册。
		2.component()方法接受两个参数，主键名称以及组件对象（extend方法的返回值）
		3.在vm的el范围内，以标签的方式使用。

	【注意】
	主键的data对象需要使用匿名函数返回，为了使每个组件的实例都有单独的数据，不和其他实例共享。
*/

var indexComponent = Vue.extend({
	template:
		`<ul>
			<li v-for="(el,idx) in menus">{{el.name}}</li>
		</ul>`
	,
	//组件的data需要用匿名函数返回
	data:function(){
		return {
			menus:[{
				name:'首页'
			},{
				name:'设备'
			},{
				name:'员工'
			},{
				name:'权限'
			}]
		}
	}
});

//全局注册
Vue.component("f-index",indexComponent);

var vm = new Vue({
	el:"#app"
});
