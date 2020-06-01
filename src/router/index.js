/*
 * @Author: your name
 * @Date: 2020-03-25 17:24:26
 * @LastEditTime: 2020-05-23 14:05:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import { getTitle } from '@/common/utils'

import Login from '@/views/login/index'
import layout from '@/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  // 登录页面
  {
    path: '/login',
    component: Login,
    name: '登录',
    hidden: true,
    meta: { title: '登录', icon: '' }
  },
  {
    path: '/home',
    name: 'Home',
    component: layout,
    redirect: '/',
    meta: { title: '首页', icon: '' },
    children: [
      {
        path: '/',
        component: () => import('@/views/home/index'),
        name: 'home',
        meta: { title: '首页', icon: 'el-icon-homepage' },
        children: []
      }
    ]
  },
  // 实现路由刷新效果
  {
    path: '/redirect',
    component: layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: '详情页', icon: 'el-icon-homepage' },
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
// router.beforeEach(async (to, from, next) => {
//   document.title = getTitle(to.meta.title)
//   if (to.path === '/login') {
//     console.log('从登录进入', to, from)
//     next()
//   } else {
//     console.log('错误之后', to, from)
//     // next({
//     //   path: '/login'
//     // })
//   }
// })
export default router
