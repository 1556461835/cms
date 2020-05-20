<!--
 * @Author: your name
 * @Date: 2020-05-13 10:12:28
 * @LastEditTime: 2020-05-20 15:19:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\layout\components\header\components\msgList.vue
 -->
<template>
  <transition class="warn-transition">
    <div v-if="openMsgVisible" class="msg_main">
      <el-card shadow="always">
        <div slot="header" class="clearfix">
          <span>消息中心</span>
          <i class="el-icon-close" style="float: right; padding: 3px 0" @click="openMsg" />
        </div>
        <el-tabs>
          <el-tab-pane label="通知">
            <div class="msg_box">
              <div class="info">
                <div class="info-content">收到一封邮件</div>
                <div>2020-05-13 13:54</div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="报警">
            <div class="msg_box">
              <div class="info">
                <div class="info-content">报警信息</div>
                <div>2020-05-13 13:54</div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="日志">
            <div class="msg_box">
              <div class="info">
                <div class="info-content">日志信息</div>
                <div>2020-05-13 13:54</div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </transition>

</template>

<script>
export default {
  props: {
    openMsgVisible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  watch: {
    openMsgVisible: {
      handler (val) {
        if (!val) {
          return
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    openMsg () {
      this.$emit('update:openMsgVisible', false)
    }
  }
}
</script>

<style lang="scss">
  .msg_main {
    position: fixed;
    top: 50px;
    right: 0px;
    width: 300px;
    .clearfix {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
    }
    .msg_box {
      height: 400px;
      overflow-y: auto;
      font-size: 14px;
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(0,0,0, 0.17);
        height: 40px;
      }
      .info-content {
        width: 120px;
        overflow: hidden;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;/*文本不换行*/
      }
    }
  }
  // 报警盒子动画
.warn-transition-enter-active, .warn-transition-leave-active {
  transition: all .4s;
}
.warn-transition-enter, .warn-transition-leave-active {
  transform: translate3d(100%, 0, 0);
  // opacity: 0;
}
</style>
