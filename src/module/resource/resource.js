import Vue from 'vue'
import App from './app'
import store from './store'
import VueResource from 'vue-resource'
Vue.use(VueResource)
require('bootstrap-sass')


/* eslint-disable no-new */

new Vue({
  store,
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')