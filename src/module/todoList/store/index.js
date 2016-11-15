import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import dc from 'assets/img/dc.jpg'
import cty from 'assets/img/cty.jpg'
import rotk from 'assets/img/rotk.jpg'
import rf from 'assets/img/rf.jpg'
Vue.use(Vuex)

const state = {
  count: 0,
  title: 'Todo List',
  newText: '',
  value: 1,
  texts: [
    {text: '这是第一行'}
  ],
  lists:[
    {
      title: '单车武士',
      src: dc,
      playerID: '单车',
      meme: '这个C炮怎么压到我的？'
    },
    {
      title: 'XB骑士',
      src: rotk,
      playerID: 'ROTK',
      meme: '拉谁说话!'
    },
    {
      title: '天宇技师',
      src: cty,
      playerID: 'CTY',
      meme: '不会，不学，不练，给你脸了？'
    },
    {
      title: '若风巫师',
      src: rf,
      playerID: '若风',
      meme: '瞬间爆炸！'
    },
  ]
}
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store