<!--
 * @Author: your name
 * @Date: 2020-05-08 19:56:30
 * @LastEditTime: 2020-05-13 10:53:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\layout\index.vue
 -->
<template>
  <div>
    <div>
      <navbar />
    </div>
    <div style="display:flex">
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <router-view />
      </el-main>
    </div>
  </div>
</template>

<script>
import { Navbar } from './components'
export default {
  name: 'Layout',
  components: {
    Navbar
  }
}
</script>

<style>

</style>

