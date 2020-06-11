/*
 * @Author: your name
 * @Date: 2020-05-09 17:30:05
 * @LastEditTime: 2020-05-12 14:22:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\http\index.js
 */
import axios from 'axios'
// import { Message } from 'element-ui'
// import store from '@/store'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 设置request拦截器
service.interceptors.request.use(config => {
  console.log('拦截器config', config)
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 设置response拦截器
service.interceptors.response.use(
  response => {
    console.log('响应的值', response.data)
    return Promise.resolve(response.data)
  },
  error => {
    console.log('设置response拦截器err' + error)
  }
)

export default service
