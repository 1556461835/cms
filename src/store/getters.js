/*
 * @Author: your name
 * @Date: 2020-05-11 15:05:58
 * @LastEditTime: 2020-06-01 22:45:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\store\getters.js
 */
const getters = {
  // 用户
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  // 系统设置
  openMsg: state => state.base.openMsg,
  collapse: state => state.base.collapse
}

export default getters
