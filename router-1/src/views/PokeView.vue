<template>
  <h2>Pokemon individual</h2>
  <p v-if="loading" >Cargando datos ...</p>
  <div class="alert alert-danger mt-2" v-if="errorData">{{ errorData}}</div>
  <div v-if="data">
    <h2>Poke nombre: {{ $route.params.name }}</h2>
    <img alt="" :src="data.sprites?.front_default"/>
  </div>


  <button @click="volver" class="btn btn-outline-primary"> Volver</button>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router"
import {useGetData} from '@/composables/getData.js'
import {ref} from "vue";

const {data, loading, getData, errorData} = useGetData()
const ruta = useRoute()
const rutas = useRouter()

const poke = ref({})

const volver = () => {
  rutas.push('/all')
}

// const getData = async () => {
//   try {
//     const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ruta.params.name}`)
//     poke.value = data
//
//   } catch (e) {
//     poke.value = null;
//   }
// }
//
getData(`https://pokeapi.co/api/v2/pokemon/${ruta.params.name}`)


</script>
