<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-12 09:22:35
 * @FilePath: /element_test/src/pages/ComponentsPage/subComponents/ChildComp.vue
-->
<template>
  <div>{{ msg }} ' ' {{ this.$emit("title") }}</div>
</template>

<script>
export default {
  props: [title],
  name: 'ChildComp',
  data () {
    return {
      msg: '111'
    }
  }
}
</script>

<style scoped></style>
