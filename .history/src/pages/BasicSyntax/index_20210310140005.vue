<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-10 14:00:05
 * @FilePath: /element_test/src/pages/BasicSyntax/index.vue
-->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>v-bind</p>
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <hr />
    <p>if</p>
    <p v-if="seen">现在你看到我了</p>
    <el-button @click="switchHandle">{{ seen ? "隐藏" : "显示" }}</el-button>
    <hr />
    <p>v-for</p>
    <ol>
      <li :key="key" v-for="(item, key) in todos">{{ item.text }}</li>
    </ol>
    <hr />
    <p>v-on 添加监听器</p>
    <p>{{p2Message}}</p>
    <el-button v-on:click="reverseMessage">click me</el-button>
  </div>
</template>

<script>
export default {
  name: 'BasicSyntax',
  data () {
    return {
      msg: 'basicSyntax',
      message: '页面加载于 ' + new Date().toLocaleString(),
      seen: true,
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ],
      p2Message: 'message 2 ===>'
    }
  },
  methods: {
    switchHandle () {
      this.seen = !this.seen
    },
    reverseMessage () {
      this.p2Message = 'message 2 ===> hello v-on',
      setTimeout(() => {
        this.p2Message.split
      }, 1000)
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
