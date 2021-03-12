<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-11 17:47:54
 * @FilePath: /element_test/src/pages/ComponentsPage/subComponents/ChildComp.vue
-->
<template>
  <div>
    {{ msg }} ' ' {{this.$emit('title')}}
  </div>
</template>

<script>
export default {
  name: 'ChildComp',
  data () {
    return {
      msg: '111'
    }
  }
}
</script>

<style scoped></style>
