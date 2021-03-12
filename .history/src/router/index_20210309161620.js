/*
 * @Author: your name
 * @Date: 2021-03-08 17:56:46
 * @LastEditTime: 2021-03-09 16:16:20
 * @LastEditors: yyy_dui
 * @Description: In User Settings Edit
 * @FilePath: /element_test/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '../pages/Main/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      // component: HelloWorld
      component: Main
    }

  ]
})
