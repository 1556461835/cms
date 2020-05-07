<!--
 * @Author: your name
 * @Date: 2020-03-25 17:41:03
 * @LastEditTime: 2020-04-28 09:04:25
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
    <div class="aaa">50</div>
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
  },
  mounted () {
  },
  methods: {

  }

}
</script>

<style lang="scss" scoped>
@import '@/common/style/basestyle.scss';

.login-form {
  background: theme;
  width: 6rem;
}
.aaa {
  font-size: 1rem;
}
</style>
