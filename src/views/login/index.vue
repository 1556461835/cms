<!--
 * @Author: your name
 * @Date: 2020-03-25 17:41:03
 * @LastEditTime: 2020-03-26 21:02:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\views\login\index.vue
 -->
<template>
  <div>
    <el-form :model="formLabelAlign" class="login-form">
      <el-form-item>
        <el-input v-model="formLabelAlign.userName" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="formLabelAlign.passWord" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formLabelAlign: {
        userName: '',
        passWord: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/style/basestyle.scss';
.login-form {
  background: theme;
  width: 400px;
}
</style>
