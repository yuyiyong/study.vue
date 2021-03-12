<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-12 09:52:40
 * @FilePath: /element_test/src/pages/ComponentsPage/subComponents/ChildComp.vue
-->
<template>
  <div>
    <div>{{ msg }} {{ title }}</div>
    <el-button size="small" type="primary" v-on:click="$emit('fontMargnify')">+</el-button>放大字体
    <el-button size="small" type="primary" v-on:click="$emit('fontReduce')">-</el-button>缩小字体
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
