/*
 * @Author: your name
 * @Date: 2021-03-08 17:56:46
 * @LastEditTime: 2021-03-09 12:04:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /element_test/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/pages/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: HelloWorld
    }

  ]
})
