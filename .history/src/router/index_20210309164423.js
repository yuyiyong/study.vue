/*
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-09 16:44:19
 * @FilePath: /element_test/src/router/index.js
 */

import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '../pages/Main/Main.vue'
import Login from '../pages/Login/Login.vue'
import Containt1 from '../pages/Containt/Containt1.vue'
import Containt2 from '../pages/Containt/Containt2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      // component: HelloWorld
      component: Main,
      children: [
        {
          path: '/containt1',
          component: Containt1
        },
        {
          path: '/containt2',
          component: Containt2
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      // component: HelloWorld
      component: Login
    }
  ]
})
