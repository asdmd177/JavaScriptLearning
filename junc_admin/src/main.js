import Vue from 'vue'
import App from './App.vue'
import router from './router'
//plugins
import './plugins/element.js'
import './plugins/iview.js'
import './plugins/animate.js'

//style
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
