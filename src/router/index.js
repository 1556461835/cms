/*
 * @Author: your name
 * @Date: 2020-03-25 17:24:26
 * @LastEditTime: 2020-03-26 20:23:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { getTitle } from '@/common/utils'

import Login from '@/views/login/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { title: '首页' }
  },
  // 登录页面
  {
    path: '/login',
    component: Login,
    name: '登录',
    hidden: true,
    meta: { title: '登录', icon: '' }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach(async (to, from, next) => {
  document.title = getTitle(to.meta.title)
  if (to.path === '/login') {
    next()
  } else {
    next({
      path: '/login'
    })
  }
})
export default router
