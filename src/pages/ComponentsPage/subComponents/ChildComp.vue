<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-12 09:54:20
 * @FilePath: /element_test/src/pages/ComponentsPage/subComponents/ChildComp.vue
-->
<template>
  <div>
    <div>{{ msg }} {{ title }}</div>
    <el-button size="small" type="primary" v-on:click="$emit('fontMargnify',100)">+</el-button>放大字体
    <el-button size="small" type="primary" v-on:click="$emit('fontReduce',200)">-</el-button>缩小字体
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
