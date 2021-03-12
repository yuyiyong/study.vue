<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-09 16:39:18
 * @FilePath: /element_test/src/pages/Main/Main.vue
-->
<template>
  <div>
    <h1>
      {{ msg }}
    </h1>
    <menu />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from '../Layout/Menu/Menu'
import Menu from '../Menu/Menu.vue'
export default {
  components: { Menu },
  name: 'Main',
  comments: { Menu },
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
