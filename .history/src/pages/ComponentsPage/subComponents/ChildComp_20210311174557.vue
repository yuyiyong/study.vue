<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-11 17:44:27
 * @FilePath: /element_test/src/pages/ComponentsPage/subComponents/ChildComp.vue
-->
<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
    name:'ChildComp'
  data () {
    return {
      msg: '111'
    }
  }
}
</script>

<style scoped></style>
