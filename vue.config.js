/*
 * @Author: your name
 * @Date: 2020-03-25 18:47:24
 * @LastEditTime: 2020-06-08 15:04:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \个人工具网站\www_admin_master\vue.config.js
 */
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
console.log('实例', process.env)
function getProxy (path, type) {
  if (path === '/api') {
    switch (type) {
      case 'localhost':
        return 'http://localhost:8080/'
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
  lintOnSave: process.env.NODE_ENV !== 'production',
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
        target: getProxy('/api', process.env.VUE_APP_TYPE), // 代理到目标地址
        pathRewrite: { // 路径重写
          '^/api': '/api'
        }
      }
    },
    before (app) {
      app.get('/api/logininfo', function (req, res) {
        res.json({
          code: 200,
          token: 'root',
          data: {
            username: 'admin',
            password: '123456',
            userImage: '',
            IP: '111111111',
            loginTime: '2020-05-11'
          }
        })
      })
    }
  }
}
