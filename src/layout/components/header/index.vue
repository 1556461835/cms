<!--
 * @Author: your name
 * @Date: 2020-05-08 21:21:51
 * @LastEditTime: 2020-05-08 21:58:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\layout\components\header\index.vue
 -->
<template>
  <el-header>
    <div class="layout-logo">
      <img src="" alt="公司logo">
    </div>
    <div>11</div>
  </el-header>
</template>

<script>
export default {
  data () {
    return {
      logo: require('@/assets/image/layout/logo_header.jpg')
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/common/style/basestyle.scss';

.el-header {
  height: $layout-nav-height;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  box-sizing: border-box;
  justify-content: space-between;
  .layout-logo {
    width: 200rem;
    font-size: 16px;
  }
}
</style>
