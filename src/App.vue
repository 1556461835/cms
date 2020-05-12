<!--
 * @Author: your name
 * @Date: 2020-03-25 17:24:26
 * @LastEditTime: 2020-05-09 13:19:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\App.vue
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted () {
    console.log('路由', this.$router)
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
