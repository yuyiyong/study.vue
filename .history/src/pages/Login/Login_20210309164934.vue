<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-09 16:49:33
 * @FilePath: /element_test/src/pages/Login/Login.vue
-->
<template>
  <div class="msg">
    {{ msg }}
    <el-button to='/'>login</el-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login Page'
    }
  }
}
</script>

<style scoped>
.msg{
    color:blue
}
</style>
