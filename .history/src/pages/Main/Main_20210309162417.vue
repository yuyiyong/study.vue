<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-09 16:24:11
 * @FilePath: /element_test/src/pages/Main/Main.vue
-->
<template>
  <h1>
    {{msg}}
  </h1>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'main'
    }
  }
}
</script>

<style scoped>
h1{
  color: red;
}
</style>
