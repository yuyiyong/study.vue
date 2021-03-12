<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-12 09:34:46
 * @FilePath: /element_test/src/pages/ComponentsPage/index.vue
-->
<template>
  <div>
    <div :style="{fontSize:postFontSize+'px'}">放大字体 牛</div>
    <child-comp v-bind:title="title"></child-comp>
  </div>
</template>

<script>
import ChildComp from './subComponents/ChildComp.vue'
export default {
  components: { ChildComp },
  data () {
    return {
      msg: 'sss',
      title: 'title11',
      postFontSize: 50
    }
  },
  component: { ChildComp }
}
</script>

<style scoped></style>
