import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 51
  },
  getters: {
  },
  mutations: {
    incrementar(state, payload){
      state.contador = state.contador + payload
    },
    disminuir(state, payload){
      state.contador = state.contador - payload
    }
  },
  actions: {
    accionIncrementar({commit}){
      commit('incrementar', 10)
    },
    accionDisminuir({commit}, valor){
      commit('disminuir', valor)
    },
    accionBoton({commit}, objeto){
      if(objeto.estado){
        commit('incrementar', objeto.numero)
      }else{
        commit('disminuir', objeto.numero)
      }
    }
  },
  modules: {
  }
})
