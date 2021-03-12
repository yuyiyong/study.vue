<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-09 17:41:13
 * @FilePath: /element_test/src/pages/Login/Login.vue
-->
<template>
  <div class="wrap">

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
.wrap {
  color: blue;
}
</style>
