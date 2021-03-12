<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-10 11:54:28
 * @FilePath: /element_test/src/pages/BasicSyntax/index.vue
-->
<template>
  <div>
    <h1>{{msg}}</h1>
    <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
  </div>
</template>

<script>
export default {
  name: 'BasicSyntax',
  data () {
    return {
      msg: 'basicSyntax',
      massage: ''
    }
  }
}
</script>

<style  scoped>
    h1{
        text-align: center;
    }
</style>
