<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-09 17:41:37
 * @FilePath: /element_test/src/pages/Login/Login.vue
-->
<template>
  <div class="wrap">
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
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
