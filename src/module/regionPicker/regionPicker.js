import Vue from 'vue'
import App from './app'
import RegionPicker from 'vue-region-picker'
import REGION_DATA from 'china-area-data'

Vue.use(RegionPicker, {
  region: REGION_DATA,
  vueVersion: 2 // or 2, default 1
})
require('bootstrap-sass')

/* eslint-disable no-new */

new Vue({
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')