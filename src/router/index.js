/*
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-11 17:39:54
 * @FilePath: /element_test/src/router/index.js
 */

import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '../pages/Main/Main.vue'
import Login from '../pages/Login/Login.vue'
import Containt1 from '../pages/Containt/Containt1.vue'
import Containt2 from '../pages/Containt/Containt2.vue'
import BasicSyntax from '../pages/BasicSyntax/index.vue'
import ComponentsPage from '../pages/ComponentsPage/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/basicSyntax',
          name: 'BasicSyntax',
          component: BasicSyntax
        },

        {
          path: '/components',
          name: 'ComponentsPage',
          component: ComponentsPage
        },
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
