// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routers from './router'

import Util from './utils/util'
import iView from 'iview'
import './utils/ext'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(iView)

//路由配置
const RouterConfig = {
  routes: Routers
}
const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  Util.title(to.meta.title);
  next();
});

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
