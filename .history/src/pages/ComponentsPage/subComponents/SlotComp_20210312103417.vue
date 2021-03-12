<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-12 10:34:17
 * @FilePath: /element_test/src/pages/ComponentsPage/subComponents/SlotComp.vue
-->
<template>
    <div>
        <header>
            <slot></slot>
        </header>
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

<style lang="scss" scoped>

</style>
