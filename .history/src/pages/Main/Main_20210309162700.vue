<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-09 16:27:00
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
