<template>
  <div>
    <Menus />
    <!-- <h1>
      {{ msg }}
    </h1> -->
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
