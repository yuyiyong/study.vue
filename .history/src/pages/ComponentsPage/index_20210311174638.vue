<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-11 17:46:38
 * @FilePath: /element_test/src/pages/ComponentsPage/index.vue
-->
<template>
  <div>
      <child-comp title='title'></child-comp>
    {{ msg }}
  </div>
</template>

<script>
import ChildComp from './subComponents/ChildComp.vue'
export default {
  components: { ChildComp },
  data () {
    return {
      msg: 'sss'
    }
  },
  component: {ChildComp}
}
</script>

<style  scoped></style>
