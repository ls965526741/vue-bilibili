// import Vue from "vue"
import Confirm from './Confirm.vue'
const obj = {}
obj.install = function (Vue) {
  const ToastContrustor = Vue.extend(Confirm)
  const myConfirm = new ToastContrustor()
  myConfirm.$mount(document.createElement('div'))
  document.body.appendChild(myConfirm.$el)
  Vue.prototype.$myConfirm = myConfirm
}
export default obj

// main.js中执行
// import toast from "components/common/toast"
// Vue.use(toast)
