/*
 * @Author: your name
 * @Date: 2020-05-09 19:48:46
 * @LastEditTime: 2020-05-09 20:42:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\common\config\index.js
 */
import { post, get } from '@/common/config/request' // 请求文件

export default {
  install (Vue, options) {
    Vue.prototype.$post = post
    Vue.prototype.$get = get
  }
}
