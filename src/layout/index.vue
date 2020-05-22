<!--
 * @Author: your name
 * @Date: 2020-05-08 19:56:30
 * @LastEditTime: 2020-05-13 10:53:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www_admin_master\src\layout\index.vue
 -->
<template>
  <div>
    <div>
      <navbar />
    </div>
    <div style="display:flex">   
		<newaside />
		<el-main>
			<router-view />
		</el-main>
    </div>
  </div>
</template>

<script>
import { Navbar } from './components'
import { newaside } from './components'
export default {
  name: 'Layout',
  components: {
    Navbar,
	newaside
  }
}
</script>

<style>

</style>

