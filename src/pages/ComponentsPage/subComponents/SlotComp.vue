<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-12 10:36:00
 * @FilePath: /element_test/src/pages/ComponentsPage/subComponents/SlotComp.vue
-->
<template>
    <div>
        <h1>
            <slot></slot>
        </h1>
    </div>
</template>

<script>
export default {
  name: 'SlotComp',
  data () {
    return {
      msg: '111'
    }
  }
}
</script>

<style  scoped>

</style>
