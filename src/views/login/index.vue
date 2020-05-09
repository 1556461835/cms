<!--
 * @Author: your name
 * @Date: 2020-03-25 17:41:03
 * @LastEditTime: 2020-05-08 11:31:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\views\login\index.vue
 -->
<template>
<div>
    <div class="login">
      <img :src="img" alt="背景图" class="logobg">
      <el-form :model="formLabelAlign" class="login-form">
        <div>
          <img :src="logo" alt="logo" class="logo-img">
        </div>
        <div>
			<el-form-item>
				<el-input v-model="formLabelAlign.userName" type="text" placeholder="请输入用户名"/>
			</el-form-item>
			<el-form-item>
				<el-input v-model="formLabelAlign.passWord" type="password" placeholder="请输入密码"/>
			</el-form-item>
			<el-form-item>
				<el-button @click.native="login" type="primary" style="width:260px">立即登录</el-button>  
			</el-form-item>
			<el-form-item>
				<span style="color: #000099;" @click="login">员工账号登陆</span>
				<span style="float: right;color: #A9A9AB">忘记密码？</span>
			</el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import bgimg from '@/assets/image/login/login-bg.jpg'
import logo from '@/assets/image/login/logo.png'

export default {
  data () {
    return {
      img: bgimg,
      logo: logo,
      formLabelAlign: {
        userName: '',
        passWord: ''
      }
    }
  },
  mounted () {
  },
  methods: {
	login() {
	          if (!this.formLabelAlign.userName) {
	            this.$message.error('请输入用户名');
	            return;
	          }
	          if (!this.formLabelAlign.passWord) {
	            this.$message.error('请输入密码');
	            return;
	          }   
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
.login-form {
  width: 6rem;
  height: 3rem;
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
.logobg {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.logo-img {
  width: 3rem;
  height: 2rem;
}
</style>
