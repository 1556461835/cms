/*
 * @Author: your name
 * @Date: 2020-03-25 18:47:24
 * @LastEditTime: 2020-05-09 21:04:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iem-web-projectd:\个人工具网站\www_admin_master\vue.config.js
 */
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
function getProxy (path, type) {
  if (path === '/api') {
    switch (type) {
      case 'localhost':
        return 'http://localhost:3000'
      case 'service':
        return ''
    }
  }
}

module.exports = {
  publicPath: './',
  outputDir: 'admin',
  assetsDir: 'static',
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('views', resolve('src/views'))
    config.optimization.runtimeChunk('single')
  },
  devServer: {
    host: 'localhost',
    port: '8080',
    hot: true,
    open: true,
    overlay: {
      warning: false,
      error: true
    },
    proxy: {
      '/api': {
        target: getProxy('/api', 'localhost'),
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
