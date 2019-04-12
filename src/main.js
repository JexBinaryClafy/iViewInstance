// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router.js'

import iView from 'iview'
import './utils/ext'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(iView)

//路由配置
const RouterConfig={
  routers:router
}
const vrouter = new VueRouter(RouterConfig)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:vrouter,
  render:h=>h(App)
})
