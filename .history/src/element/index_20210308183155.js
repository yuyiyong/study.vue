/*
 * @Author: your name
 * @Date: 2021-03-08 18:29:00
 * @LastEditTime: 2021-03-08 18:31:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element_test/src/element/index.js
 */
// 导入自己需要的组件
import { Select, Option, OptionGroup, Input, Tree, Dialog, Row } from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Input)
    Vue.use(Tree)
    Vue.use(Dialog)
    Vue.use(Row)
    // Vue.use(Col)
  }
}
export default element
