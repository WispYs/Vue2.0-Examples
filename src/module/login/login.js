import Vue from 'vue'
import App from './app'
import store from '../store'

require('bootstrap-sass')

/* eslint-disable no-new */

new Vue({
  store,
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')