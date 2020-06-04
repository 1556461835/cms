<!--
 * @Author: your name
 * @Date: 2020-05-12 16:08:01
 * @LastEditTime: 2020-06-02 18:12:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\layout\components\aside\index.vue
 -->
<template>
  <el-menu
    default-active="this.$route.path"
    class="el-menu-vertical-demo"
    :collapse="!collapse"
    background-color="#f2f2f2"
    router
    @open="handleOpen"
    @close="handleClose"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-custom" />
        <span>用户分析</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/dao">数据统计</el-menu-item>
        <el-menu-item index="/ces">用户管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-upload" />
        <span>资料上传</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="">企业简介</el-menu-item>
        <el-menu-item index="">资讯动态</el-menu-item>
        <el-menu-item index="">产品管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="">
      <i class="el-icon-document" />
      <span slot="title">购买单列表</span>
    </el-menu-item>
    <el-menu-item index="">
      <i class="el-icon-star-on" />
      <span slot="title">收藏列表</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Newaside',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['collapse'])
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    daohang () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
