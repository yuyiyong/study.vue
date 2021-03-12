/*
 * @Author: your name
 * @Date: 2021-03-08 18:29:00
 * @LastEditTime: 2021-03-08 18:41:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element_test/src/element/index.js
 */
// 导入自己需要的组件
import {
  Select,
  Option,
  OptionGroup,
  Input,
  Tree,
  Dialog,
  Row,
  Button,
  Col,
  Tabs
} from 'element-ui'

const element = {
  install: function (Vue) {
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Input)
    Vue.use(Tree)
    Vue.use(Dialog)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Button)
    Vue.use(Tabs)
  }
}
export default element
