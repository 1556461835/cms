/*
 * @Author: your name
 * @Date: 2020-05-20 18:28:14
 * @LastEditTime: 2020-05-21 09:38:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\lang\index.js
 */

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang

import enLocale from './en'
import zhLocale from './zh'
// import esLocale from './es'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: sessionStorage.getItem('language') || 'zh',
  // set locale messages
  messages
})

export default i18n
