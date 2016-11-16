import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'
import store from './store'
import dota from './components/dota'
import wow from './components/wow'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
Vue.use(VueRouter)
require('bootstrap-sass')
/* eslint-disable no-new */
const router = new VueRouter({
  history: false,
  hashbang: true,
  routes: [
    {
      path: '',
      component: dota
    },
    {
      path: '/wow',
      component: wow
    },
    {
      path: '/dota',
      component: dota,
      children: [
            {
              path: '',
              component: { template: '<div class="club">Navi</div>' }
            },
            {
              path: '/dota/Ti1',
              component: { template: '<div class="club">Navi</div>' }
            },
            {
              path: '/dota/Ti2',
              component: { template: '<div class="club">IG</div>' }
            },
            {
              path: '/dota/Ti3',
              component: { template: '<div class="club">Alliance</div>' }
            },
            {
              path: '/dota/Ti4',
              component: { template: '<div class="club">NewBee</div>' }
            },
            {
              path: '/dota/Ti5',
              component: { template: '<div class="club">EG</div>' }
            },
            {
              path: '/dota/Ti6',
              component: { template: '<div class="club">Wings</div>' }
            }
          ]
    }
  ]
})
new Vue({
  router: router,
  store,
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')