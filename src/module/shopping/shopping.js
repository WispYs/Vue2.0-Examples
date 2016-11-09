import Vue from 'vue'
import App from './app'
import VueRouter from 'vue-router'
import store from './store'
import shoppingCar from './components/shoppingCar'
import goods from './components/goods'
require('bootstrap-sass')
Vue.use(VueRouter)

/* eslint-disable no-new */
const router = new VueRouter({
  history: false,
  hashbang: true,
  routes: [
    {
      path: '',
      component: goods
    },
    {
      path: '/shoppingCar',
      component: shoppingCar
    }
  ]
})
new Vue({
  router,
  store,
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')