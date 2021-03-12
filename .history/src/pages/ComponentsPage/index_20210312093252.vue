<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-12 09:32:32
 * @FilePath: /element_test/src/pages/ComponentsPage/index.vue
-->
<template>
  <div>
    <child-comp v-bind:title="title"></child-comp>
    <div>放大字体 牛</div></div>
  </div>
</template>

<script>
import ChildComp from './subComponents/ChildComp.vue'
export default {
  components: { ChildComp },
  data () {
    return {
      msg: 'sss',
      title: 'title11'
    }
  },
  component: { ChildComp }
}
</script>

<style scoped></style>
