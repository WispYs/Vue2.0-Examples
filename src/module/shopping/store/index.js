import Vue from 'vue'
import Vuex from 'vuex'
import miku from 'assets/img/miku.jpg'
import koala from 'assets/img/koala.jpg'
import dota from 'assets/img/dota.jpg'
Vue.use(Vuex)

const state = {
  title: 'Shopping',
  showNum: 0,
  price:'',
  count: 1,
  goodsImg: [ miku, dota, koala ],
  goodsName: ['MIKU','Dota2','koala'],
  goodsPrice: [1998, 2333, 3154],
  goodsColor: [
      {
        text: '红色',
        Color: 'red'
      }, 
      {
        text: '蓝色',
        Color: 'blue'
      }, 
      {
        text: '黄色',
        Color: 'yellow'
      }
  ],
  imgBorder: '',
  goodsInfo:{},
  goodsList:[]

}
const mutations = {
  changeImg (state,index) {
    state.showNum = index;
    state.goodsInfo.goodsName = state.goodsName[index]
    state.goodsInfo.goodsImg = state.goodsImg[index]
  },
  changeColor (state,index) {
    state.imgBorder = state.goodsColor[index].Color
    state.goodsInfo.color = state.goodsColor[index].text
  },
  changePrice (state,index) {
    state.price = state.goodsPrice[index]
    state.goodsInfo.price = state.goodsPrice[index]
    state.goodsInfo.count = state.count
    state.goodsInfo.totle = state.count * state.price
  },
  increment (state) {
    state.count++
    state.goodsInfo.count = state.count
    state.goodsInfo.totle = state.count * state.price
  },
  decrement (state) {
    if(state.count > 1){
      state.count--
      state.goodsInfo.count = state.count
      state.goodsInfo.totle = state.count * state.price
    }
  },
  addShoppingCar (state) {
    state.goodsList.push(state.goodsInfo)
    state.goodsInfo = {}
    console.log(state.goodsList)
  }
}

export default new Vuex.Store({
  state,
  mutations
})

