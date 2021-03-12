<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-10 10:36:43
 * @FilePath: /element_test/src/pages/Login/Login.vue
-->
<template>
  <div class="wrap">
    <p>Login</p>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
     <el-form-item label="用户名" prop="name">
        <el-input
          type="text"
          v-model="ruleForm.name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <!-- <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item> -->
      <!-- <el-form-item>

      </el-form-item> -->
      <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  methods: {
    handleLogin () {
      console.log('aaaaa')
      this.$router.push({ path: '/containt1' })
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) return
        console.log('formName--valid', formName, valid)
        if (valid) {
          console.log('formName--valid', formName, valid)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  data () {
    /* var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    } */
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        /* if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        } */
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    let validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      }
    }

    return {
      ruleForm: {
        pass: '',
        name: '',
        age: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        name: [{validator: validateName, trigger: 'blur'}]
        // checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        // age: [{ validator: checkAge, trigger: 'blur' }]
      },
      msg: 'login'
    }
  }
}
</script>

<style scoped>
.wrap {
  text-align: center;
  /* color: blue; */
  width: 500px;
  margin: 300px auto;
  background: #fff;
  padding: 25px;
  font-size: 22px;
  font-weight: 500;
}
</style>
