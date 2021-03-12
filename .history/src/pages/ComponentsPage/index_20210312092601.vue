<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-12 09:26:01
 * @FilePath: /element_test/src/pages/ComponentsPage/index.vue
-->
<template>
  <div>
    <child-comp v-bind:title="title"></child-comp>
    {{ msg }}
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
