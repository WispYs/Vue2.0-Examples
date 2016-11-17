import Vue from 'vue'
import App from './app'
import loginfalse from './components/loginFalse'
import logintrue from './components/loginTrue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
require('bootstrap-sass')

new Vue({
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')
