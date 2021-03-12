<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-09 16:35:58
 * @FilePath: /element_test/src/pages/Main/Main.vue
-->
<template>
  <h1>
    {{msg}}
    <router-view></router-view>
  </h1>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Main Page'
    }
  }
}
</script>

<style scoped>
h1{
  color: red;
}
</style>
