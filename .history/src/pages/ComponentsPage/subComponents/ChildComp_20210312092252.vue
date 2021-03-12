<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-12 09:22:51
 * @FilePath: /element_test/src/pages/ComponentsPage/subComponents/ChildComp.vue
-->
<template>
  <div>{{ msg }} ' ' {{ title }}</div>
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
