import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      //重定向
      redirect:'/main'
    },
    {
    	path:'/main',
    	name:'main',
    	component:() => import('@/components/main/main.vue'),
      children:[{
        path:'/contact',
        name:'通讯录',
        meta:{
          title:'通讯录',
          path:'contact',
          icon:'md-home'
        },
        component:()=>import('@/view/contact/contact.vue')
      },{
        path:'/tableTree',
        name:'表格树',
        meta:{
          title:'表格树',
          path:'tableTree',
          icon:'md-home'
        },
        component:()=>import('@/view/tableTree/tableTree.vue')
      }]
    }
  ]
})
