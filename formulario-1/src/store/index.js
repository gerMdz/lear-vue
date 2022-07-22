import { createStore } from 'vuex'
import router from "@/router";

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
      if(!state.tareas.find(item => item.id === payload)){
        router.push('/').then(r => {})
        return
      }
      state.tarea = state.tareas.find(item => item.id === payload)
    },
    update(state, payload){
      state.tareas = state.tareas.map(item => item.id === payload.id? payload: item)
      router.push('/').then(r => {})
    }
  },
  actions: {
    setTareas({commit}, tarea){
      commit('set', tarea)
    },
    deleteTareas({commit}, id){
      commit('eliminar', id)
    },
    setTarea({commit}, id){
        commit('tarea', id)
    },
    updateTarea({commit}, tarea){
      commit('update', tarea)
    }
  },
  modules: {
  }
})
