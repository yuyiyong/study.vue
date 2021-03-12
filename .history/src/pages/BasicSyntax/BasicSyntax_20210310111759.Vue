<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-10 11:17:59
 * @FilePath: /element_test/src/pages/BasicSyntax/BasicSyntax.Vue
-->
<template>
  <div>
    <Menus />
    <!-- <h1>
      {{ msg }}
    </h1> -->
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
