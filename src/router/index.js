/*
 * @Author: your name
 * @Date: 2020-03-25 17:24:26
 * @LastEditTime: 2020-05-12 15:08:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
// import { getTitle } from '@/common/utils'

import Login from "@/views/login/index";
import layout from "@/layout/index.vue";

Vue.use(VueRouter);

const routes = [
  // 登录页面
  {
    path: "/login",
    component: Login,
    name: "登录",
    hidden: true,
    meta: { title: "登录", icon: "" }
  },
  {
    path: "/home",
    name: "Home",
    component: layout,
    redirect: "/",
    meta: { title: "首页", icon: "" },
    children: [
      {
        path: "/",
        component: () => import("@/views/home/index"),
        name: "home",
        meta: { title: "首页", icon: "el-icon-homepage" },
        children: []
      }
    ]
  },
  {
    path: "/dao",
    name: "daoh",
    component: layout,
    redirect: "/dao/index",
    meta: { title: "导航", icon: "" },
    children: [
      {
        path: "index",
        component: () => import("@/views/dao/index"),
        name: "daoindex",
        meta: { title: "导航", icon: "el-icon-homepage" },
        children: []
      }
    ]
  },
  {
    path: "/ces",
    name: "dd",
    component: layout,
    redirect: "/ces/user",
    meta: { title: "导航", icon: "" },
    children: [
      {
        path: "user",
        component: () => import("@/views/ces/user"),
        name: "daoindex",
        meta: { title: "练习", icon: "el-icon-homepage" },
        children: []
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    meta: { title: "详情页", icon: "el-icon-homepage" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});
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
export default router;
