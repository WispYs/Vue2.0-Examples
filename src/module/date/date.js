import Vue from 'vue'
import App from './app'
import Calendar from './components/Calendar'
require('bootstrap-sass')

new Vue({
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')