/*
 * @Author: your name
 * @Date: 2020-05-09 13:37:27
 * @LastEditTime: 2020-05-12 15:25:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\common\config\permission.js
 */
import router from '@/router/index'
import { getTitle } from '@/common/utils/index'

// 免登陆可进入的页面
const whiteList = ['/login', '/401', '/404', '/retrieve']

router.beforeEach(async (to, from, next) => {
  document.title = getTitle(to.meta.title)
  if (sessionStorage.getItem('token')) {
    if (to.path === '/login') {
      console.log('路由进入', to)
      next({ path: '/home' })
    } else {
      next()
    }
  } else {
    console.log('没有token', to)
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
    }
  }
})
