/*
 * @Author: your name
 * @Date: 2020-03-25 17:24:26
 * @LastEditTime: 2020-05-21 09:44:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master:\个人工具网站\www_admin_master\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/common/style/index.scss' // 自定义样式
import '@/common/config/permission' // 路由动态配置
import prototype from '@/common/config/prototype' // 挂载在原型上的方法
import i18n from './lang' // Internationalization

Vue.use(prototype)
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
