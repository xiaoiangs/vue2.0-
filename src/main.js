import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/index' // 引入路由配置
import store from './store/' // 引入store
import { AjaxPlugin } from 'vux' // 请求数据用
import interceptor from './api/interceptor.js'
Vue.use(AjaxPlugin)
Vue.use(VueRouter)
require('./mock.js') // 引入mock数据
const router = new VueRouter({
  routes,
  mode: 'hash'
})
router.beforeEach(function (to, from, next) { // 路由状态改变时，commit加载动画的状态
  store.commit('IS_SHOW_LOADING', {isLoading: true})
  next()
})

router.afterEach(function (to) { // 路由状态改变时，commit加载动画的状态
  store.commit('IS_SHOW_LOADING', {isLoading: false})
})
// fastClick
FastClick.attach(document.body)
// 暂时关闭生产环境提供的错误信息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  interceptor,
  render: h => h(App)
}).$mount('#app-box')
