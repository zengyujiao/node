import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 如果是index.js可以省越不写
import store from './store/store'
import 'weui'
import './assets/style.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
