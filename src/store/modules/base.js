/*
 * @Author: your name
 * @Date: 2020-05-21 10:28:52
 * @LastEditTime: 2020-05-23 08:53:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iem-web-projectd:\个人工具网站\www_admin_master\src\store\modules\base.js
 */

const base = {
  namespaced: true,
  state: {
    openMsg: sessionStorage.getItem('openMsg') || false,
    lang: sessionStorage.getItem('lang') || 'zh'
  },
  mutations: {
    // 设置开关消息组件
    SET_OPEN_MSG: (state, openMsg) => {
      state.openMsg = openMsg
    },
    SET_LANG: () => {

    }
  },
  actions: {
    setOpenMsg ({ commit }, openMsg) {
      sessionStorage.setItem('openMsg', openMsg)
      commit('SET_OPEN_MSG', openMsg)
    }
  }
}

export default base
