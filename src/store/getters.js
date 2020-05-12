/*
 * @Author: your name
 * @Date: 2020-05-11 15:05:58
 * @LastEditTime: 2020-05-11 15:07:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\store\getters.js
 */
const getters = {
  // 用户
  token: state => state.user.token,
  userInfo: state => state.user.userInfo
}

export default getters
