import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './app'
Vue.use(Vuex)
require('bootstrap-sass')


/* eslint-disable no-new */

new Vue({
	store,
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')