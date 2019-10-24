import Vue from 'vue'
import VueRouter from 'vue-router'
import Wechat from '../views/wechat/wechat.vue'
import Rerover from '../views/rerover/rerover.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'wechat',
    component: Wechat
  },
  {
    path: '/contact',
    name: 'contact',
    // 懒加载
    component: () => import('../views/contact/contact.vue')
  },
  {
    path: '/rerover',
    name: 'rerover',
    component: Rerover
  },
  {
    path: '/mine',
    name: 'mine',
    // 懒加载
    component: () => import('../views/mine/mine.vue')
  },
  {
    path: '/det/:id',
    name: 'det',
    // 懒加载
    component: () => import('../views/det/det.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
