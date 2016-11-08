import Vue from 'vue'
import App from './app'
import store from '../store'
import loginfalse from './components/loginFalse'
import logintrue from './components/loginTrue'
require('bootstrap-sass')


new Vue({
  store,
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')
