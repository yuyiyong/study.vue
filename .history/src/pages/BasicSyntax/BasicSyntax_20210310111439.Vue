<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-10 11:14:39
 * @FilePath: /element_test/src/pages/BasicSyntax/BasicSyntax.Vue
-->
<template>
  <h1>
    {{ msg }}
  </h1>
</template>
<script>
export default {
  name: 'BasicSyntax',
  data () {
    return {
      msg: 'basicSyntax'
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
