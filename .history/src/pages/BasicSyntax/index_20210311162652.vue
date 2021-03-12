<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-11 16:26:52
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
    <hr />
    <p>绑定 HTML Class</p>
    <div v-bind:class="classObject">css</div>
    <div v-bind:class="[isActive ? activeClass : '', errorClass]">css 2</div>
    <div v-bind:class="[{ active: isActive }, errorClass]">css 3</div>
    <div v-bind:class="{ active: isActive }">css 4</div>
    <hr />
    <h1 v-if="awesome">Vue is awesome!</h1>

    <hr />
    <ul id="v-for-object" class="demo">
      <li v-bind:key="index" v-for="(value, key, index) in object">
        {{ index }} : {{ key }} : {{ value }}
      </li>
    </ul>

    <hr />
    remove
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="E.g. Feed the cat"
      />
      <button v-on:click="addList">Add</button>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="index">
        {{ todo.title }} <button v-on:click="remove(index)">remove</button>
      </li>
    </ul>
    <hr />
    <p>修饰符 别操作</p>
    <p>
      .stop .prevent .capture .self .once .passive
    </p>
    <!-- 阻止单击事件继续传播 -->
    <a v-on:click.stop="doThis">stop</a>

    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit">prevent</form>

    <!-- 修饰符可以串联 -->
    <a v-on:click.stop.prevent="doThat">.stop.prevent</a>

    <!-- 只有修饰符 -->
    <form v-on:submit.prevent>.prevent</form>

    <!-- 添加事件监听器时使用事件捕获模式 -->
    <!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
    <div v-on:click.capture="doThis">capture</div>

    <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
    <!-- 即事件不是从内部元素触发的 -->
    <div v-on:click.self="doThat">self...</div>
    <!-- 点击事件将只会触发一次 -->
    <a v-on:click.once="doThis"></a>
    <!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
    <!-- 而不会等待 `onScroll` 完成  -->
    <!-- 这其中包含 `event.preventDefault()` 的情况 -->
    <div v-on:scroll.passive="onScroll">...</div>
    <!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
    <input v-on:keyup.enter="submit" />
    <input v-on:keyup.page-down="onPageDown" />
    <p>!-- Alt + C --</p>
    <input v-on:keyup.alt.67="clear" />
    <p>!-- Ctrl + Click --</p>
    <div v-on:click.ctrl="doSomething">Do something</div>
    <p>!-- 即使 Alt 或 Shift 被一同按下时也会触发 --</p>
    <button v-on:click.ctrl="onClick">A</button>

    <p>!-- 有且只有 Ctrl 被按下的时候才触发 --</p>
    <button v-on:click.ctrl.exact="onCtrlClick">A</button>

    <p>!-- 没有任何系统修饰符被按下的时候才触发 --</p>
    <button v-on:click.exact="onClick">A</button>
    <hr />
    <p>Multiline message is:</p>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br />
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
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
        { text: '学习 JavaScript', title: 'title1' },
        { text: '学习 Vue', title: 'title2' },
        { text: '整个牛项目', title: 'title3' }
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
      answer: 'I cannot give you an answer until you ask a question!',
      isActive: true,
      error: null,
      awesome: true,
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
      newTodoText: ''
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
    },
    // setter
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  },
  methods: {
    remove (index) {
      this.todos.splice(index, 1)
    },
    addList () {
      this.todos.push({
        title: this.newTodoText
      })
    },
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
