// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'


/*css*/
import '@/css/base.css'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

/*全局配置*/
Vue.prototype.$config = {
	homeName:'通讯录'
}

Vue.use(iview);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  //配置路由
  router,
  components: { App },
  template: '<App/>'
})
