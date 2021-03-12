<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-12 10:25:58
 * @FilePath: /element_test/src/pages/ComponentsPage/subComponents/CustomerInput.vue
-->
<template>
  <div>
    <input v-bind:value="value" v-on:input="$emit('input',$event.target.value)"/>
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
