<!--
 * @Author: your name
 * @Date: 2020-03-25 17:41:03
 * @LastEditTime: 2020-05-09 20:45:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\views\login\index.vue
 -->
<template>
  <div>
    <div class="login">
      <img :src="img" alt="背景图" class="logobg">
      <el-row class="login-form">
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <el-form ref="form" :model="person.formLabelAlign" :rules="person.rules">
            <el-form-item prop="userName">
              <el-input v-model.trim="person.formLabelAlign.userName" clearable prefix-icon="el-icon-user-solid" type="username" placeholder="请输入账户" @keyup.enter.native="handleLogin()" />
            </el-form-item>
            <el-form-item prop="passWord">
              <el-input v-model.trim="person.formLabelAlign.passWord" clearable prefix-icon="el-icon-question" type="password" placeholder="请输入密码" @keyup.enter.native="handleLogin()" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width:100%" @click.native="login()">立即登录</el-button>
            </el-form-item>
            <el-form-item>
              <span style="color: #000099;" @click="login">员工账号登陆</span>
              <span style="float: right;color: #A9A9AB">忘记密码？</span>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import bgimg from '@/assets/image/login/login-bg.jpg'
import logo from '@/assets/image/login/logo.png'
import { GET_USER_INFO } from '@/api/user'

export default {
  data () {
    return {
      img: bgimg,
      logo: logo,
      person: {
        formLabelAlign: {
          userName: 'admin',
          passWord: '123456'
        },
        rules: {
          userName: [
            { required: true, message: '请输入账户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          passWord: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
          ]
        }
      }
    }
  },
  mounted () {
    const data = this.$get(GET_USER_INFO, {})
    console.log('返回值', data)
  },
  methods: {
    login () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
      console.log(this.person.formLabelAlign)
    }
  }
}
</script>

<style lang="scss">
@import '@/common/style/basestyle';

.login {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.logobg {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.login-form {
  width: 400px;
  height: 250px;
  border-radius: 10px;
  background-color: #fff;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  -moz-box-shadow:0px 1px 8px #333333;
  -webkit-box-shadow:0px 1px 8px #333333;
  box-shadow:0px 1px 8px #333333;
}
.login-form .el-col{
  width: 100%;

}
.login-form .el-form-item{
  margin-bottom: 20px;
  width: 100%;
}
</style>
