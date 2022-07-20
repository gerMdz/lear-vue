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
    },
    eliminar(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
    },
    tarea(state, payload){
      state.tarea = state.tareas.find(item => item.id === payload)
    },
  },
  actions: {
    setTareas({commit}, tarea){
      commit('set', tarea)
    },
    deleteTareas({commit}, id){
      commit('eliminar', id)
    },
    serTarea({commit}, id){
        commit('tarea', id)
    }
  },
  modules: {
  }
})
