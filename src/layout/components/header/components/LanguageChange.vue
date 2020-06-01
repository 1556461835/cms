<!--
 * @Author: your name
 * @Date: 2020-05-20 16:54:47
 * @LastEditTime: 2020-05-21 10:12:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\layout\components\header\components\lanuageChange.vue
-->
<template>
  <div>
    <el-dropdown trigger="click" @command="handleCommand">
      <div class="languageSvg">
        <svg t="1589967712468" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1370"><path d="M651.3 390.041h325.224a47.76 47.76 0 0 1 46.623 48.897v536.165A47.76 47.76 0 0 1 976.524 1024H419.322a47.76 47.76 0 0 1-46.623-48.897V633.959H46.907A47.76 47.76 0 0 1 0.284 585.062V48.897A47.76 47.76 0 0 1 46.907 0h557.77A47.76 47.76 0 0 1 651.3 48.897zM46.907 585.061h557.77V48.898H46.907v536.165z m635.665-16.488l-102.343 278.6h45.485l25.018-71.64h113.714l25.018 71.64h43.78l-102.912-278.6z m-22.175 170.572l44.35-126.223 47.19 126.223z m-354.22-625.43h35.251v71.071h135.32v188.198h-35.251V350.81H341.428V481.58h-33.546V350.81h-97.226v22.174h-35.251V184.786h132.477z m-95.52 200.706h96.657v-93.246h-96.658z m130.771 0h100.069v-93.246H341.428z" p-id="1371" fill="#515151" /></svg>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh">中文</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    handleCommand (lang) {
      this.$i18n.locale = lang
      // this.$store.dispatch('app/setLanguage', lang)
      this.$message({
        message: this.$t('checkOutLanguage'),
        type: 'success'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.languageSvg {
  font-size: 16px;
  .icon {
    font-size: 1em;
    height: 1em;
    width: 1em;
  }
}

</style>
