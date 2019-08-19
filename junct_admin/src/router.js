import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/Login.vue'
import Home from './views/home/Home.vue'
import Welcome from './views/welcome/Welcome.vue'
import UserList from './views/user/user-list/Userlist.vue'
import UserRole from './views/user/user-role/Userrole.vue'
import Instruction from './views/system/instruct-manage/Instruction.vue'
import MenuManage from './views/system/function-manage/Function.vue'
import Echarts from './views/report/Echarts.vue'
Vue.use(Router)

let router = new Router({
  routes: [{
  		path:'/',
  		redirect:'/welcome'
  	},{
      path: '/login',
      name: 'login',
      component: Login
    },{
    	path:'/home',
    	name:'home',
    	component:Home,
    	redirect:'/welcome',
    	children:[{
    		path:'/welcome',
    		name:'welcome',
    		component:Welcome
    	},{
        path:'/user-list',
        name:'user-list',
        component:UserList
      },{
        path:'/user-role',
        name:'user-role',
        component:UserRole
      },{
        path:'/menu-manage',
        name:'menu-manage',
        component:MenuManage
      },{
        path:'/instructs-manage',
        name:'instructs-manage',
        component:Instruction
      },{
        path:'/echarts',
        name:'echarts',
        component:Echarts
      }]
    }]
});

router.beforeEach((to,from,next)=>{
  if(to.name != 'login' && to.name != 'welcome'){
    var tag = {
      path:to.path,
      name:to.name,
      color:'primary'
    }
    window.sessionStorage.setItem('tagInUrl',JSON.stringify(tag));
  }
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
