export const add = ({ commit }) => commit('add')
export const remove = ({ commit, state }, index ) => {
  state.texts.splice(index, 1)
}
