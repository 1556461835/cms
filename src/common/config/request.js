/*
 * @Author: your name
 * @Date: 2020-05-09 19:25:55
 * @LastEditTime: 2020-05-09 19:47:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\common\config\post.js
 */

import service from '@/http'

/**
 * post 方式获取服务器端信息,不加密
 * @param { string } url 请求的url地址
 * @param { object } data value值
 * @param { isNotify } string 'no'不自动提示请求结果，默认在屏幕右上角显示服务器请求结果
 */
export async function post (url, data, isNotify) {
  const tmp = await service({
    url: url,
    method: 'post',
    data
  })
  return tmp
}

/**
 * post 方式获取服务器端信息,不加密
 * @param { string } url 请求的url地址
 * @param { object } data value值
 * @param { isNotify } string 'no'不自动提示请求结果，默认在屏幕右上角显示服务器请求结果
 */
export async function get (url, data, isNotify) {
  const tmp = await service({
    url: url,
    method: 'get',
    data: data || {}
  })
  return tmp
}

