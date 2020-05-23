/*
 * @Author: your name
 * @Date: 2020-03-25 17:24:26
 * @LastEditTime: 2020-05-22 17:08:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import base from './modules/base'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    base
  },
  getters
})
