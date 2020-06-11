<!--
 * @Author: your name
 * @Date: 2020-06-10 10:34:39
 * @LastEditTime: 2020-06-10 10:49:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iem-web-projectd:\个人工具网站\www_admin_master\src\components\UTable.vue
-->
<template>
  <div>
    <div v-if="uTableHeader" class="main-title">
      <slot name="TableHead" />
    </div>
    <div>
      <el-table :border="true" :data="tableData">
        <slot name="TableBody" />
      </el-table>
      <div v-if="uTablePage" class="pagination-padding">
        <el-pagination
          :current-page="currentPage"
          :page-sizes="pageSizes"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    uTableHeader: {
      type: Boolean,
      default: true
    },
    uTablePage: {
      type: Boolean,
      default: true
    },
    tableData: {
      type: Array,
      default: function () {
        return []
      }
    },
    pageSizes: {
      type: Array,
      default: function () {
        return [10, 20, 30]
      }
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      pageSize: 10, // 每页显示的条目数
      currentPage: 1 // 当前页面码
    }
  },
  methods: {
    // 每页条目数的改变
    handleSizeChange (val) {
      this.$emit('handle-size-change', val)
    },
    // 当前页的改变
    handleCurrentChange (val) {
      this.$emit('handle-current-change', val)
    }
  }
}
</script>

<style lang="scss">
.main-title {
 height: 40px;
}
.pagination-padding {
  padding: 20px 0;
}
</style>
