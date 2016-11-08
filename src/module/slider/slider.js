import Vue from 'vue'
import App from './app'
import { Slider, SliderItem } from 'vue-easy-slider'
require('bootstrap-sass')



/* eslint-disable no-new */

new Vue({
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')