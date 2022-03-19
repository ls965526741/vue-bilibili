import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/pages/home'),
    meta: {
      keepalive: true,
      isTabbar: true
    }
  },
  {
    path: '/profile',
    component: () => import('@/pages/profile'),
    meta: {
      istoken: true,
      isTabbar: true
    }
  },
  {
    path: '/detail/:id',
    component: () => import('@/pages/detaile')
  },
  {
    path: '/profilespace',
    component: () => import('@/pages/profile/profileSpace/index.vue')
  },
  {
    path: '/characterset',
    component: () => import('@/pages/theme/characterset.vue')
  },
  {
    path: '/DarkMode',
    component: () => import('@/pages/theme/DarkMode.vue')
  },
  {
    path: '/login',
    component: () => import('@/pages/login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (!localStorage.getItem('id') && !localStorage.getItem('token') && to.meta.istoken) {
//     router.push('/login')
//     return
//   }
//   next()
// })

export default router
