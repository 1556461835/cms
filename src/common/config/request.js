/*
 * @Author: your name
 * @Date: 2020-05-09 19:25:55
 * @LastEditTime: 2020-05-09 19:47:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\common\config\post.js
 */

import service from '@/http'
import { Message } from 'element-ui'

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
  if (tmp.code === 200) {
    return tmp.data
  } else {
    const message = requestError(tmp.code, tmp.userMsg)
    Message({
      message: message,
      type: 'warning'
    })
  }
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

function requestError (code, message) {
  const statusCode = (code + '').replace(/[^0-9]+/g, '') - 0

  switch (statusCode) {
    case 400:
      return 'Bad Request (错误的请求)'
    case 401:
      return 'Unauthorized (请求要求身份验证)'
    case 403:
      return 'Forbidden (服务器拒绝请求)'
    case 404:
      return 'NOT Found (服务器找不到请求的资源)'
    case 405:
      return 'Bad Request (禁用请求中指定的方法)'
    case 406:
      return 'Not Acceptable (无法使用请求的内容特性响应请求的网页)'
    case 407:
      return 'Proxy Authentication Required (需要代理授权)'
    case 408:
      return 'Request Timed-Out (服务器等候请求时发生超时)'
    case 409:
      return 'Conflict (服务器在完成请求时发生冲突。服务器必须在响应中包含有关冲突的信息)'
    case 410:
      return 'Gone (请求的资源已被永久删除)'
    case 411:
      return 'Length Required (服务器不接受不含有效内容长度标头字段的请求)'
    case 412:
      return 'Precondition Failed (未满足前提条件)'
    case 413:
      return 'Request Entity Too Large (请求实体过大)'
    case 414:
      return 'Request, URI Too Large (请求的 URI 过长)'
    case 415:
      return 'Unsupported Media Type (不支持的媒体类型)'
    case 429:
      return '您的操作过于频繁,请稍后重试'
    case 500:
      return 'Internal Server Error (服务器内部错误)'
    case 501:
      return 'Not Implemented (尚未实施)'
    case 502:
      return 'Bad Gateway (错误网关)'
    case 503:
      return 'Server Unavailable (服务不可用)'
    case 504:
      return 'Gateway Timed-Out (网关超时)'
    case 505:
      return 'HTTP Version not supported (HTTP 版本不受支持)'
    case -999:
      return '(程序异常)'
    default:
      return message
  }
}

