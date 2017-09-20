// 引入axios以及vux中的loading组件
import Vue from 'vue'
import axios from 'axios'
import { Loading, Toast } from 'vux'
Vue.use(Loading, Toast)
axios.defaults.timeout = 15000
// 请求拦截器
axios.interceptors.request.use(config => {
  this.$vux.loading.show({
    text: '加载中...'
  })
  return config
}, error => {
  this.$vux.loading.hide()
  this.$vux.toast.text('请检查网络...')
  console.log(Promise.reject(error))
})
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
  this.$vux.loading.hide()
  return data
}, error => {
  if (error.message === 'Network Error') {
    console.log(Promise.reject(error))
  }
  this.$vux.loading.hide()
})
