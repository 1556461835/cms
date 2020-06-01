<!--
 * @Author: your name
 * @Date: 2020-05-08 21:21:51
 * @LastEditTime: 2020-05-21 09:56:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\layout\components\header\index.vue
 -->
<template>
  <div class="cms-header">
    <div class="layout-logo">
      <img :src="logo" alt="公司logo">
    </div>
    <div class="nav-bar">
      <div style="margin:20px;">
		<i class="el-icon-s-grid"   style="background-color: #FF9900;"></i>
      </div>
      <div class="functionComponents">
        <!-- 开启全屏 -->
        <el-tooltip :content="$t('navbar.screen')" effect="dark" placement="bottom" class="function-item">
          <i class="el-icon-menu" />
        </el-tooltip>
        <!-- 消息 -->
        <el-tooltip :content="$t('navbar.message')" effect="dark" placement="bottom" class="function-item">
          <i class="el-icon-message-solid" @click="handleClick('msg')" />
        </el-tooltip>
        <!-- 切换皮肤 -->
        <!-- 设置语言 -->
        <el-tooltip :content="$t('navbar.lang')" effect="dark" placement="bottom" class="function-item">
          <language-change />
        </el-tooltip>
        <!-- 用户信息 -->
        <el-dropdown trigger="click" class="function-item" @command="getUser">
          <span class="el-dropdown-link">
            <div class="profile">
              <img :src="userProfile" alt="用户头像" class="userimage">
            </div>
            <!-- <span>admin</span> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item, index) in dropdownList"
              :key="index"
              :command="item.command"
            >
              {{ $t(`user.${item.command}`) }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <!-- 消息提示组件 -->
    <msg-list :open-msg-visible.sync="openMsgVisible" />
    <!-- 用户信息组件 -->
    <el-dialog title="用户信息" :visible.sync="userVisable">
      <el-table>
        <el-table-column property="date" label="日期" width="150" />
        <el-table-column property="name" label="姓名" width="200" />
        <el-table-column property="address" label="地址" />
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import MsgList from './components/MsgList'
import LanguageChange from './components/LanguageChange'

export default {
  components: {
    MsgList,
    LanguageChange
  },
  data () {
    return {
      logo: require('@/assets/image/layout/logo_header.jpg'),
      userProfile: require('@/assets/image/user/admin.jpg'),
      openMsgVisible: false,
      userVisable: false,
      dropdownList: [
        { name: '个人信息', command: 'userInfo', icon: 'el-icon-plus' },
        { name: '退出登录', command: 'loginOut', icon: 'el-icon-circle-plus' }
      ]
    }
  },
  methods: {
    getUser (command) {
      switch (command) {
        case 'userInfo':
          this.userVisable = true
          break
        case 'loginOut':
          sessionStorage.clear()
          location.reload()
          break
      }
    },
    // 消息提示
    handleClick (event, data) {
      switch (event) {
        case 'msg' :
          this.openMsgVisible = !this.openMsgVisible
          break
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/common/style/basestyle.scss';

.cms-header {
  width: 100vw;
  height: $layout-nav-height;
  background: $layout-background-color;
  font-size: 18px;
  display: flex;
  padding: 0 10px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  .layout-logo {
    width: 200px;
    font-size: 16px;
    img {
      width: 200px;
      height: 40px;
    }
  }
  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 200px);
    padding-left: 10px;
    .functionComponents {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .function-item {
        margin-right: 10px;
      }
    }
    .profile {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      display: inline-block;
      .userimage {
        width: 50px;
        height: 50px;
      }
    }
  }
}
.el-dialog__header {
  display: flex;
  justify-content: space-between;
}
</style>
