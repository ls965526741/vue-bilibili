import Vue from 'vue'
import './vant'
import '@/assets/css/normalize.css' // css样式重置
import '@/assets/font/iconfont.css' // icon字体库
import '@/assets/iconfont/iconfont.css' // icon字体库
import '@/assets/css/vantTheme.less' // vant 定制主题

import myConfirm from '@/components/common/confirm'
import http from '@/network/request'
import '@/mock/index'

Vue.prototype.$bus = new Vue()
Vue.prototype.$http = http
Vue.use(myConfirm)
