<!--
 * @Author: your name
 * @Date: 2020-05-23 11:27:40
 * @LastEditTime: 2020-05-23 12:02:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iem-web-projectd:\个人工具网站\www_admin_master\src\views\redirect\index.vue
-->
<script>
export default {
  name: 'Redirect',
  created () {
    const { params, query } = this.$route
    const { path } = params
    console.log(this.$route)
    console.log('自己的路由定义', path, query)
    this.$router.replace({ path: '/' + path, query })
  },
  render: function (h) {
    return h()
  }
}
</script>
