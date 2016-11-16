import Vue from 'vue'
import App from './app'
import store from './store'
import VueResource from 'vue-resource'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
Vue.use(VueResource)
require('bootstrap-sass')


/* eslint-disable no-new */

new Vue({
  store,
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')