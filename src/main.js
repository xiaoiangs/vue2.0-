import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/index'
import store from './store/'
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'hash'
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
