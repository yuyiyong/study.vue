<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-11 17:45:35
 * @FilePath: /element_test/src/pages/ComponentsPage/index.vue
-->
<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
import ChildComp from '@/pages/ComponentsPage/subComponents/ChildComp'
export default {
  data () {
    return {
      msg: 'sss'
    }
  },
  component: {ChildComp}
}
</script>

<style  scoped></style>
