import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  title: 'Resource',  
  name: '豆瓣电影排行榜',
  onOff: false
}

const store = new Vuex.Store({
  state
})


export default store