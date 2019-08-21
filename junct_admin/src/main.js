import Vue from 'vue'
import App from './App.vue'
import router from './router'
//plugins
import './plugins/element.js'
import './plugins/iview.js'
import './plugins/animate.js'
import './plugins/axios.js'
import './plugins/js-md5.js'

//style
import './assets/icon-fonts/iconfont.css'
import './assets/global.less'

//filter
import './filter/gender-filter.js'

Vue.config.productionTip = false
//build eventHub
let eventHub = new Vue();
Vue.prototype.$eventHub = eventHub;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
