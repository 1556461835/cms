/*
 * @Author: your name
 * @Date: 2020-03-25 18:15:40
 * @LastEditTime: 2020-04-27 18:09:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\commom\utils\index.js
 */

export function getTitle (til) {
  const title = '资源管理系统'
  return til + '-' + title
}

/**
  * @description: rem比例换算
*/

export function changeFontSize () {
  const clientWidth = document.documentElement.clientWidth
  document.documentElement.style.fontSize = clientWidth / 19.2 + 'px'
  window.onresize = function temp () {
    const clientWidth = document.documentElement.clientWidth
    document.documentElement.style.fontSize = clientWidth / 19.2 + 'px'
  }
}
