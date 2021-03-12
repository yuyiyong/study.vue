<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-12 09:36:40
 * @FilePath: /element_test/src/pages/ComponentsPage/subComponents/ChildComp.vue
-->
<template>
  <div>{{ msg }} ' ' {{ title }}</div>
  <el-button type="primary">+</el-button>放大字体
</template>

<script>
export default {
  props: ['title'],
  name: 'ChildComp',
  data () {
    return {
      msg: '111'
    }
  }
}
</script>

<style scoped></style>
