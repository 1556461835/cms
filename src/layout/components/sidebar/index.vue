<!--
 * @Author: your name
 * @Date: 2020-05-12 16:08:01
 * @LastEditTime: 2020-06-09 20:35:21
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
    <el-submenu v-for="item in pagerouter" :key="item.path" :index="item.path">
      <template slot="title">
        <i :class="item.meta.icon" />
        <span>{{ item.meta.title }}</span>
      </template>
      <el-menu-item-group v-if="item.children">
        <el-menu-item v-for="(page, i) in item.children" :key="i" :index="page.path">{{ page.meta.title }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Newaside',
  data () {
    return {
      pagerouter: []
    }
  },
  computed: {
    ...mapGetters(['collapse'])
  },
  mounted () {
    console.log('路由', this.$router.options.routes)
    const data = this.$router.options.routes
    const routArray = []
    for (const item of data) {
      if (item.hidden) {
        routArray.push(item)
      }
    }
    this.pagerouter = routArray
    console.log('值', this.pagerouter)
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
