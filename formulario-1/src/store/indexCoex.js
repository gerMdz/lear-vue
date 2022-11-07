import {createStore} from 'vuex'
import router from "@/router";

export default createStore({
    state: {
        coexs: [],
        coex: {
            id: '',
            name: '',
        }
    },
    getters: {},
    mutations: {
        cargar(state, payload) {
            state.coexs = payload
        },
        set(state, payload) {
            state.coexs.push(payload)
        },
        eliminar(state, payload) {
            state.coexs = state.coexs.filter(item => item.id !== payload)
        },
        coex(state, payload) {
            if (!state.coexs.find(item => item.id === payload)) {
                router.push('/').then(r => {
                })
                return
            }
            state.coex = state.coexs.find(item => item.id === payload)
        },
        update(state, payload) {
            state.coexs = state.coexs.map(item => item.id === payload.id ? payload : item)
            router.push('/').then(r => {
            })
        }
    },
    actions: {
        async cargarRelacionesFamiliares({commit}) {
            try {
                const res = await fetch(`https://docs.igle.ar/api/coexistence_situation`, {})
                const dataDBIA = await res.json()
                console.log(dataDBIA['hydra:member'])
                const DataIA = dataDBIA['hydra:member']

                const arrayCoexistence = []
                for (let index in DataIA) {
                    arrayCoexistence.push(DataIA[index])
                }
                console.log(arrayCoexistence);
                commit('cargar', arrayCoexistence)


            } catch (e) {
                console.log(e)
            }

        },

        async setcoexs({commit}, coex) {
            try {
                const res = await fetch(`https://api-vue-udemy-3b734-default-rtdb.firebaseio.com/coexs/${coex.id}.json`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(coex),
                })

                const dataDB = await res.json()
                console.log(dataDB)
            } catch (e) {
                console.log(e)
            }
            commit('set', coex)
        },

        async deletecoexs({commit}, id) {

            try {
                const res = await fetch(`https://api-vue-udemy-3b734-default-rtdb.firebaseio.com/coexs/${id}.json`, {
                        method: 'DELETE'
                    }
                )
                commit('eliminar', id)
            } catch (e) {
                console.log(e)
            }

        },
        setCoex({commit}, id) {
            commit('coex', id)
        },
        async updatecoex({commit}, coex) {
            try {
                const res = await fetch(`https://api-vue-udemy-3b734-default-rtdb.firebaseio.com/coexs/${coex.id}.json`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(coex),

                })
                const dataDB = await res.json()
                commit('update', dataDB)
            } catch (e) {
                console.log(e)
            }

        }
    },
    modules: {}
})
