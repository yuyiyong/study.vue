<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-10 11:09:38
 * @FilePath: /element_test/src/pages/BasicSyntax/BasicSyntax.Vue
-->
<template>
  <div>
    {{ msg }}
  </div>
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
.aaa{
    color:blue
}
</style>
