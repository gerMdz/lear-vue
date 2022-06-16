import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 51
  },
  getters: {
  },
  mutations: {
    incrementar(state){
      state.contador = state.contador + 10
    },
    disminuir(state){
      state.contador = state.contador - 8
    }
  },
  actions: {
    accionIncrementar({commit}){
      commit('incrementar')
    },
    accionDisminuir({commit}){
      commit('disminuir')
    }
  },
  modules: {
  }
})
