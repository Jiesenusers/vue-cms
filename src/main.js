// 入口文件
import Vue from 'vue'

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 2.1 导入 vue-resource,用来请求数据，axios也可以
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

// 导入 MUI 的样式
import './lib/mui/dist/css/mui.css'
// 导入扩展图标样式
import './lib/mui/examples/hello-mui/css/icons-extra.css'
// 字体图标
import './lib/mui/examples/hello-mui/fonts/mui.ttf'
import './lib/mui/examples/hello-mui/fonts/mui-icons-extra.ttf'

// 按需导入mint-ui里的组件,下面是格式
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 1.3 导入自己的 router.js 路由模块
import router from './router.js'

// 导入 App 根组件
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router // 1.4 挂载路由对象到 VM 实例上
})