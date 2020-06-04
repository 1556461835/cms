/*
 * @Author: your name
 * @Date: 2020-05-21 10:28:52
 * @LastEditTime: 2020-06-01 23:17:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iem-web-projectd:\个人工具网站\www_admin_master\src\store\modules\base.js
 */

const base = {
  namespaced: true,
  state: {
    openMsg: sessionStorage.getItem('openMsg') || false,
    lang: sessionStorage.getItem('lang') || 'zh',
    collapse: sessionStorage.getItem('sidebarStatus') ? !!Number(sessionStorage.getItem('sidebarStatus')) : true
  },
  mutations: {
    // 设置开关消息组件
    SET_OPEN_MSG: (state, openMsg) => {
      state.openMsg = openMsg
    },
    CHANGE_COLLAPSE: (state, collapse) => {
      state.collapse = !state.collapse
      if (state.collapse) {
        sessionStorage.setItem('sidebarStatus', 1)
      } else {
        sessionStorage.setItem('sidebarStatus', 0)
      }
    }
    // SET_LANG: () => {}
  },
  actions: {
    setOpenMsg ({ commit }, openMsg) {
      sessionStorage.setItem('openMsg', openMsg)
      commit('SET_OPEN_MSG', openMsg)
    },
    changeCollapse ({ commit }) {
      commit('CHANGE_COLLAPSE')
    }
  }
}

export default base
