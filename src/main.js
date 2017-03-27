// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Hello from './components/home'
import Login from './components/login'
import Register from './components/Register'
import Shop from './components/shop'
import Me from './components/me'
import Detail from './components/detail'
Vue.use(VueRouter)
const routes = [
    {path: '/', component: Login},
    {path: '/home', component: Hello},
    {path: '/Register', component: Register},
    {path: '/Shop', component: Shop},
    {path: '/Me', component: Me},
    {path: '/Detail', component: Detail}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
