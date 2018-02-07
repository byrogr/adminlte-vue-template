import Vue from 'vue'
import axios from 'axios'
import './bootstrap/bootstrap'
import './bootstrap/bootstrap.css'
import router from './router'
import App from './components/App.vue'

Vue.config.productionTip = false
Vue.prototype.$http = axios.create()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
