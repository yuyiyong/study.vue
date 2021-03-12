<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-09 16:37:13
 * @FilePath: /element_test/src/pages/Main/Main.vue
-->
<template>
  <div>
    <h1>
      {{ msg }}
    </h1>
    <router-view></router-view>
  </div>
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
h1 {
  color: red;
}
</style>
