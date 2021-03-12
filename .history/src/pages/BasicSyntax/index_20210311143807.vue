<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-11 14:38:04
 * @FilePath: /element_test/src/pages/BasicSyntax/index.vue
-->
<template>
  <div class="wrap">
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
      <li v-bind:key="key" v-for="(item, key) in todos">
        {{ item.text + key }}
      </li>
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
    <a v-bind:[aAttr]="url" v-bind:target="viewWindow"
      >动态参数...{{ newText }}
    </a>
    <el-button v-on:click="newPageOpen">设置/取消新页面打开</el-button>
    <hr />
    <p>修饰符 .prevent</p>
    <form v-on:submit.prevent="onSubmit">submit˝</form>
    <hr />
    <p>缩写</p>
    <p>
      <!-- 完整语法 -->
      {{ text_abbreviation }}
    </p>
    <hr />
    <p>计算属性</p>
    <p>姓名： {{ getName }}</p>
    <el-button type="primary" v-on:click="changeName">change name</el-button>
    <hr />
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
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
      url: 'https://www.baidu.com',
      aAttr: 'href',
      newText: '',
      viewWindow: '',
      text_abbreviation:
        '!-- 完整语法 -- v-on:click="doSomething"..!-- 缩写 -- @click="doSomething..-- 动态参数的缩写 (2.6.0+) -- @[event]="doSomething" ',
      name: {
        firstName: 'dui',
        lastName: 'js'
      },
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  components: {
    SubComponent
  },
  // 生命周期=======
  created: function () {
    // `this` 指向 vm 实例
    console.log('created ' + '11111111')
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
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

  computed: {
    getName: function () {
      console.log('getName')
      return this.name.lastName + ' ' + this.name.firstName
    }
    // setter
  },
  methods: {
    changeName () {
      let temp = ''
      temp = this.name.lastName
      this.name.lastName = this.name.firstName
      this.name.firstName = temp
    },

    switchHandle () {
      this.seen = !this.seen
    },
    newPageOpen () {
      if (this.newText === '') {
        this.newText = '新页面'
        this.viewWindow = 'view_window'
      } else {
        this.newText = ''
        this.viewWindow = ''
      }
    },
    reverseMessage () {
      this.p2Message = 'message 2 ===> hello v-on'
      setTimeout(() => {
        this.p2Message = this.p2Message
          .split(' ')
          .reverse()
          .join(' ')
      }, 1000)
    },
    getAnswer () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.wrap {
  padding-bottom: 50px;
  text-align: center;
}
</style>
