<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-12 09:39:33
 * @FilePath: /element_test/src/pages/ComponentsPage/subComponents/ChildComp.vue
-->
<template>
  <div>
    <div>{{ msg }} ' ' {{ title }}</div>
    <el-button type="primary" v-on:click="">+</el-button>放大字体
  </div>
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
