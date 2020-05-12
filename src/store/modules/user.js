/*
 * @Author: your name
 * @Date: 2020-05-11 15:15:12
 * @LastEditTime: 2020-05-12 15:16:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\store\modules\user.js
 */
// import GET_LOGIN_INFO from '@/api/user'

const user = {
  namespaced: true,
  state: {
    token: sessionStorage.getItem('token'),
    userInfo: ''
  },
  mutations: {
    // 设置token
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    // 设置用户信息
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  actions: {
    // 存储token
    setToken ({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', data)
        console.log('设置token', data)
        sessionStorage.setItem('token', data)
        resolve()
      })
    },
    // 存储用户数据
    saveUserInfo ({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('SET_USER_INFO', data)
        console.log('userInfo', data)
        sessionStorage.setItem('user', JSON.stringify(data))
        resolve()
      })
    }
  }
}

export default user
