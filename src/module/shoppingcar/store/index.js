import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  title: '购物车列表',
  goodsList:{}
  
}
const mutations = {

}

export default new Vuex.Store({
  state,
  mutations
})

