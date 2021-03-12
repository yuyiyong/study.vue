<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-09 16:41:44
 * @FilePath: /element_test/src/pages/Main/Main.vue
-->
<template>
  <div>
    <h1>
      {{ msg }}
    </h1>
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
import Menus from '../Layout/Menu/Menu'
export default {
  components: { Menus },
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
