<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-12 10:24:35
 * @FilePath: /element_test/src/pages/ComponentsPage/subComponents/CustomerInput.vue
-->
<template>
  <div>
    <input v-bind:value="value" v-on:change=''/>
  </div>
</template>

<script>
export default {
  name: 'CustomerInput',
  props: ['value'],
  data () {
    return {
      msg: '121'
    }
  }
}
</script>

<style scoped></style>
