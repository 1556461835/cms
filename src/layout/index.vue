<!--
 * @Author: your name
 * @Date: 2020-05-08 19:56:30
 * @LastEditTime: 2020-05-09 10:18:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\layout\index.vue
 -->
<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import { main, header, aside } from './components'
export default {
  name: 'Layout'
  // components: { main, header, aside }
}
</script>

<style>

</style>
