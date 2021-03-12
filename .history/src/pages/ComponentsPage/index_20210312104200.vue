<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-12 10:42:00
 * @FilePath: /element_test/src/pages/ComponentsPage/index.vue
-->
<template>
  <div :style="{ textAlign: 'center' }">
    <div :style="{ fontSize: postFontSize + 'rem' }">放大字体 牛</div>
    <child-comp
      v-bind:title="title"
      v-on:fontMargnify="fontMargnify"
      v-on:fontReduce="fontReduce"
    ></child-comp>
    <hr />
    <p>自定义中使用 v-model</p>
    <customer-input v-model="customerInputValue"></customer-input>
    <button v-on:click='handleView'>查看 值</button>
    <br>
    <hr>
    <p>通过插槽分发内容</p>
    <slot-comp>hearder 3333</slot-comp>
    <br>
    <hr>
    <p>is 切换</p>

  </div>
</template>

<script>
import ChildComp from './subComponents/ChildComp.vue'
import CustomerInput from './subComponents/CustomerInput.vue'
import SlotComp from './subComponents/SlotComp.vue'
export default {
  components: { ChildComp, CustomerInput, SlotComp },
  data () {
    return {
      msg: 'sss',
      title: 'title11',
      postFontSize: 1,
      customerInputValue: ''
    }
  },
  component: { ChildComp },
  methods: {
    fontMargnify (event) {
      console.log('this.$event--', event)
      this.postFontSize += 1
    },
    fontReduce (event) {
      console.log('this.$event--', event)
      if (this.postFontSize >= 2) {
        this.postFontSize -= 1
      } else {
        alert('已经最小')
      }
    },
    handleView (event) {
      console.log('this.customerInputValue===', this.customerInputValue)
    }
  }
}
</script>

<style scoped>
aa {
  text-align: center;
}
</style>
