import axios from 'axios'
import store from '../store'
const http = axios.create({
  // baseURL: "http//112.74.99.5:3000/web/api"
  // baseURL: "http//127.0.0.1:8080"
  // baseURL: 'http://localhost:3000'
})
export default http
// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // console.log(config);
  store.commit('showLoading')
  // if (localStorage.getItem("token") && localStorage.getItem("id")) {
  //   config.headers.as = localStorage.getItem("token")
  // }
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  store.commit('hideLoading')
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
