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
    cargar(state, payload){
      state.tareas = payload
    },
    set(state, payload){
      state.tareas.push(payload)
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
    cargarLocalStorage({commit}){
    },
    async setTareas({commit}, tarea){
      try {
        const res = await fetch(`https://api-vue-udemy-3b734-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`,{
          method:'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea),
        })

        const dataDB = await res.json()
        console.log(dataDB)
      }catch (e){
        console.log(e)
      }
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
