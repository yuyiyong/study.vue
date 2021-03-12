<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-12 10:20:45
 * @FilePath: /element_test/src/pages/ComponentsPage/index.vue
-->
<template>
  <div :style="{ textAlign: 'center' }">
    <div :style="{ fontSize: postFontSize + 'rem' }">放大字体 牛</div>
    <child-comp
      v-bind:title="title"
      v-on:fontMargnify="fontMargnify"
      v-on:fontReduce ="fontReduce"
    ></child-comp>
    <customer-input
    <hr>
    <p>v-model</p>
  </div>
</template>

<script>
import ChildComp from './subComponents/ChildComp.vue'
import CustomerInput from './subComponents/CustomerInput.vue'
export default {
  components: { ChildComp, CustomerInput, CustomerInput },
  data () {
    return {
      msg: 'sss',
      title: 'title11',
      postFontSize: 1
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
    }
  }
}
</script>

<style scoped>
aa {
  text-align: center;
}
</style>
