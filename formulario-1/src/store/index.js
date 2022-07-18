import { createStore } from 'vuex'

export default createStore({
  state: {
    tareas:[],
    tarea:{
      id: '',
      nombre: '',
      categorias: [],
      opciones: '',
      numero: 0
    }
  },
  getters: {
  },
  mutations: {
    set(state, payload){
      state.tareas.push(payload)
      console.log(state.tareas)
    }
  },
  actions: {
    setTareas({commit}, tarea){
      commit('set', tarea)
    }
  },
  modules: {
  }
})
