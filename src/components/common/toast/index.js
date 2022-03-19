// import Vue from "vue"
import Toast from './Toast.vue'
const obj = {}
obj.install = function (Vue) {
  const ToastContrustor = Vue.extend(Toast)
  const toast = new ToastContrustor()
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}
export default obj

// main.js中执行
// import toast from "components/common/toast"
// Vue.use(toast)
