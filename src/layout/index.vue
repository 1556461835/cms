<!--
 * @Author: your name
 * @Date: 2020-05-08 19:56:30
 * @LastEditTime: 2020-05-20 18:24:45
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
      <sidebar style="width: 200px" />
      <el-main>
        <router-view />
      </el-main>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar } from './components'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style>

</style>

