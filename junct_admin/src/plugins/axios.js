import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.8.80:8080/sacloud/'
Vue.prototype.$http = axios

