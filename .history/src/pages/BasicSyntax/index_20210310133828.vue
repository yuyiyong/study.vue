<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-10 12:00:29
 * @FilePath: /element_test/src/pages/BasicSyntax/index.vue
-->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <p v-if='seen'>现在你看到我了</p> <el-button @click="switchHandle">{{seen?'隐藏':'显示'}}</el-button>
  </div>
</template>

<script>
export default {
  name: 'BasicSyntax',
  data () {
    return {
      msg: 'basicSyntax',
      message: '页面加载于 ' + new Date().toLocaleString(),
      seen: true
    }
  },
  methods: {
    switchHandle () {
      this.seen = !this.seen
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
