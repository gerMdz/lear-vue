import {defineStore} from 'pinia'
import {computed, ref} from "vue";

export const useContadorStore = defineStore("contador", () => {

    const  count = ref(0)
    const subir = () => {
        count.value++
    }
    const doble = computed(() => count.value * 2)


    return {
        count,
        subir,
        doble
    }
})
// export const useContadorStore = defineStore("contador", {
//     state: () => ({
//         count: 0,
//     }),
//     actions: {
//         subir() {
//             this.count++;
//         },
//     },
//     getters: {
//         doble: (state) => state.count * 2,
//     }
// });
