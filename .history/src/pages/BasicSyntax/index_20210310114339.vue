<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-10 11:43:39
 * @FilePath: /element_test/src/pages/BasicSyntax/index.vue
-->
<template>
  <div>
    <h1>{{msg}}</h1>
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

<style  scoped>
    h1{
        text-align: center;
    }
</style>
