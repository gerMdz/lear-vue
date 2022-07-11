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
    disminuir(state, payload){
      state.contador = state.contador - payload
    }
  },
  actions: {
    accionIncrementar({commit}){
      commit('incrementar')
    },
    accionDisminuir({commit}, valor){
      commit('disminuir', valor)
    }
  },
  modules: {
  }
})
