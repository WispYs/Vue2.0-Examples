import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  appName:"wisper",
  appPass:'000000'

}
const mutations = {
 
}

export default new Vuex.Store({
  state,
  mutations
})