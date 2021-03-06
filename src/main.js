// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'
import 'iview/dist/styles/iview.css'
import 'iview/dist/iview.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const routes=[{
	path:'/',
	component:Home
},{
	path:'/home',
	component:Home
}]
const router=new VueRouter({
	routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
new vue({
	el:'.layout'
})