/*
 * @Author: your name
 * @Date: 2021-03-08 18:29:00
 * @LastEditTime: 2021-03-09 12:14:52
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
  Tabs,
  Steps,
  Menu
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

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
    Vue.use(Steps)
    Vue.use(Menu)
  }
}
export default element
