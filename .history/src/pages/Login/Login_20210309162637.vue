<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-09 16:26:37
 * @FilePath: /element_test/src/pages/Login/Login.vue
-->
<template>
  <div class="msg">
    {{ msg }}
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
