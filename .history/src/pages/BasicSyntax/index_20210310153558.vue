<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-10 15:35:57
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
    <p>{{ p2Message }}</p>
    <el-button v-on:click="reverseMessage">click me</el-button>
    <hr />
    <p>v-model 绑定</p>
    <el-input
      width="250px"
      v-model="p2Message"
      placeholder="p2Message"
    ></el-input>
    <hr />
    <p>组件</p>
    <ol>
      <sub-Component></sub-Component>
    </ol>
    <hr />
    <p>v-once</p>
    <span v-once>这个将不会改变: {{ p2Message }}</span>
    <hr />
    <p>v-html</p>
    <!-- 你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。 -->
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <hr />
    <p>Attribute v-bind</p>
    <div v-bind:id="dynamicId">v-bind 这边的id为参数值</div>
    <el-button v-bind:disabled="btnDisable"
      >Button 绑定当中的disabled</el-button
    >
    <el-button v-on:click="btnDisable = !btnDisable">{{
      btnDisable ? "解封" : "封闭"
    }}</el-button>
    <hr />
    <p>动态参数 []</p>
    <a>动态参数... </a>
  </div>
</template>

<script>
import SubComponent from './SubComponent'
export default {
  name: 'BasicSyntax',
  data () {
    return {
      msg: 'Basic Syntax',
      message: '页面加载于 ' + new Date().toLocaleString(),
      seen: true,
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ],
      p2Message: 'message 2 ===>',
      rawHtml: '<h1>我是html的h1标签</h1>',
      dynamicId: 'aaaacccc',
      btnDisable: false,
      url: 'www.baidu.com'
    }
  },
  components: {
    SubComponent
  },
  // 生命周期=======
  created: function () {
    // `this` 指向 vm 实例
    console.log('created ' + '11111111')
  },
  mounted: function () {
    this.$nextTick(function () {
      // 等到整个视图都渲染完毕 该钩子在服务器端渲染期间不被调用。
      // Code that will run only after the
      // entire view has been rendered
      console.log('mounted ' + '22222222')
    })
  },
  beforeUpdate: function () {
    console.log('beforeUpdate ' + '33333333')
  },
  updated: function () {
    console.log('updated ' + '444444444')
  },
  activated: function () {
    console.log('activated ' + '55555555555')
  },

  beforeDestroy: function () {
    console.log('beforeDestroy ' + '66666666666')
  },
  destroyed: function () {
    console.log('destroyed ' + '77777777777')
  },
  // 生命周期=======
  methods: {
    switchHandle () {
      this.seen = !this.seen
    },
    reverseMessage () {
      this.p2Message = 'message 2 ===> hello v-on'
      setTimeout(() => {
        this.p2Message = this.p2Message
          .split(' ')
          .reverse()
          .join(' ')
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
