import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/iview.js'

//样式
import './assets/icon-fonts/iconfont.css'
import './assets/global.less'


Vue.config.productionTip = false
//build eventHub
let eventHub = new Vue();
Vue.prototype.$eventHub = eventHub;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
