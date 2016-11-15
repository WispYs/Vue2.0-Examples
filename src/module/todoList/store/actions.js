export const add = ({ commit }) => commit('add')
export const remove = ({ commit, state }, index ) => {
  state.texts.splice(index, 1)
}
export const removeList = ({ commit, state }, index ) => {
  console.log(index)
  state.lists.splice(index, 1)
}
export const handleChange = ({ commit, state }, val ) => {
  state.value = val
}
/*export const incrementIfOdd = ({ commit, state }) => {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  }
export const incrementAsync = ({ commit }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }*/
