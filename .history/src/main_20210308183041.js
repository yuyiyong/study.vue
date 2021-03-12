/*
 * @Author: your name
 * @Date: 2021-03-08 17:56:46
 * @LastEditTime: 2021-03-08 18:30:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element_test/src/main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import element from './element/index'

Vue.config.productionTip = false
Vue.use(element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
