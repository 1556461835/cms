<!--
 * @Author: your name
 * @Date: 2020-06-09 17:18:34
 * @LastEditTime: 2020-06-10 23:18:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iem-web-projectd:\个人工具网站\www_admin_master\src\views\system\role.vue
-->
<template>
  <div>
    <u-table :table-data="tableData" :total="total" @handle-current-change="handleCurrentChange" @handle-size-change="handleSizeChange">
      <template slot="TableHead">
        <el-button size="medium" @click="addRole">创建角色</el-button>
      </template>
      <template slot="TableBody">
        <el-table-column label="角色名称">
          <template slot-scope="scope">
            <span>{{ roleName[scope.row.name] }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" prop="creat_time" />
        <el-table-column label="备注" prop="remarks" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </template>
    </u-table>
    <!-- 打开弹窗 -->
    <el-dialog :title="uDialog.title" :visible.sync="uDialog.dialogFormVisible">
      <el-form :model="form" label-position="top">
        <el-row>
          <el-col :span="12">
            <el-form-item label="请选择角色" :label-width="uDialog.formLabelWidth">
              <el-select v-model="form.role" placeholder="请选择角色">
                <el-option label="系统管理员" value="0" />
                <el-option label="普通角色" value="1" />
              </el-select>
            </el-form-item>
            <el-form-item label="备注" :label-width="uDialog.formLabelWidth">
              <el-input v-model="form.remarks" autocomplete="off" />
            </el-form-item>
          </el-col>
          <el-col :span="12" />
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="uDialog.dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAddForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import UTable from '@/components/UTable'
import { FIND_ROLE_ALL_INFO } from '@/api/system'
export default {
  components: {
    UTable
  },
  data () {
    return {
      tableData: [
        {
          name: '系统管理员',
          creatTime: '2020-06-10',
          remarks: ''
        }
      ],
      total: 20,
      roleName: {
        0: '系统管理员',
        1: '普通角色'
      },
      currentPage: 1,
      uDialog: {
        dialogFormVisible: false,
        title: '',
        formLabelWidth: '120px'
      },
      form: {}
    }
  },
  mounted () {
    this.findAllRoleInfo()
  },
  methods: {
    async findAllRoleInfo () {
      const res = await this.$post(FIND_ROLE_ALL_INFO, {
        'pageSize': '10',
        'currentPage': '1'
      })
      console.log('返回的数据', res)
      this.total = res.count
      this.tableData = res.rows
    },
    handleEdit (id) {
      console.log('编辑')
    },
    handleDelete (id) {
      console.log('删除')
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    // 创建角色按钮
    addRole () {
      this.uDialog.title = '添加角色'
      this.uDialog.dialogFormVisible = true
    },
    // 添加角色
    handleAddForm () {
      console.log(this.form)
      this.uDialog.dialogFormVisible = false
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
