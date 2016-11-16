import Vue from 'vue'
import App from './app'
import Calendar from './components/Calendar'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
require('bootstrap-sass')

new Vue({
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')