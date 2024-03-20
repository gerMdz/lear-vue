<template>
  <h2>Poke nombre: {{ $route.params.name }}</h2>
  <img  alt="" :src="poke.sprites.front_default"/>

  <button @click="volver"> &lt- Volver</button>
</template>

<script setup>
import axios from "axios";
import {useRoute, useRouter} from "vue-router"
import {ref} from "vue";

const ruta = useRoute()
const rutas = useRouter()

const poke = ref({})

const volver = () => {
  rutas.push('/yo')
}

const getData = async () => {
  try {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ruta.params.name}`)
    poke.value = data

  } catch (e) {
    console.log(e)
  }
}

getData()


</script>
