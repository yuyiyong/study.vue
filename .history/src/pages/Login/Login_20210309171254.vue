<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-09 17:12:54
 * @FilePath: /element_test/src/pages/Login/Login.vue
-->
<template>
  <div class="msg">
    {{ msg }}
    <el-button @click="handleLogin">login</el-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    handleLogin: function () {
      console.log('aaaaa')
      this.$router.push({ path: '/containt1' })
    }
  },
  data () {
    return {
      msg: 'Login Page'
    }
  }
}
</script>

<style scoped>
.msg {
  color: blue;
}
</style>
