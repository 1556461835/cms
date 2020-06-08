<!--
 * @Author: your name
 * @Date: 2020-05-08 19:56:30
 * @LastEditTime: 2020-06-04 15:43:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\layout\index.vue
 -->
<template>
  <div>
    <div>
      <navbar />
    </div>
    <div class="u-main">
      <sidebar class="aslide-sidebar" />
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

<style lang="scss" scoped>
@import '@/common/style/basestyle.scss';

.u-main {
  display: flex;
  .aslide-sidebar {
    background: #f2f2f2;
    height: $layout-sider-height;
  }

  .el-menu--collapse {
    border-right: 0 !important;

    .el-submenu__icon-arrow {
      right: 10px;
      margin-top: -3px;
    }

    .el-submenu__title {
      span {
        display: none;
      }
    }
  }
}
</style>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>

