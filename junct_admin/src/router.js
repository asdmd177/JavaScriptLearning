import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/Login.vue'
import Home from './views/home/Home.vue'

Vue.use(Router)

let router = new Router({
  routes: [{
  		path:'/',
  		redirect:'/login'
  	},{
      path: '/login',
      name: 'login',
      component: Login
    },{
    	path:'/home',
    	name:'home',
    	component:Home
    }]
});

router.beforeEach((to,from,next)=>{
	if(to.name == 'login'){
		next();
	}else{
		//判断是否登陆
		let token = window.sessionStorage.getItem('token');
		//console.log(token);
		if(token){
			next();
		}
		//跳转到登录页面
		else {
			next('/login');
		}
	}
});

export default router
