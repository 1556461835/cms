<!--
 * @Author: your name
 * @Date: 2020-05-12 16:08:01
 * @LastEditTime: 2020-05-12 16:08:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\layout\components\aside\index.vue
 -->
<template>   
		<el-menu 
			default-active="this.$route.path" 
			class="el-menu-vertical-demo" 
			@open="handleOpen" 
			@close="handleClose" 
			:collapse="isCollapse"
			background-color="#f2f2f2"
			router
		>			
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-s-custom"></i>
				    <span>用户分析</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="/dao">数据统计</el-menu-item>
				    <el-menu-item index="/ces">用户管理</el-menu-item>
				</el-menu-item-group>
				</el-submenu>
			<el-submenu index="2">
				<template slot="title">
				    <i class="el-icon-upload"></i>
				    <span>资料上传</span>
				</template>
				<el-menu-item-group>
				    <el-menu-item index="">企业简介</el-menu-item>
				    <el-menu-item index="">资讯动态</el-menu-item>
				    <el-menu-item index="">产品管理</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-menu-item index="">
				<i class="el-icon-document"></i>
				<span slot="title">购买单列表</span>
			</el-menu-item>
			<el-menu-item index="">
				<i class="el-icon-star-on"></i>
				<span slot="title">收藏列表</span>
			</el-menu-item>
		</el-menu>
</template>


<script>
export default {
	name:'newaside',
	data() {
		return {
			isCollapse: true
		}
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
			console.log(key, keyPath);
        },
		daohang() {
			this.isCollapse = !this.isCollapse	
		}
    }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
	height: 100vh;
}
</style>