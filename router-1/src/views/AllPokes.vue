<script setup>
import { RouterLink } from "vue-router"
import { useGetData } from "@/composables/getData.js";
const {data, getData, loading} = useGetData()

getData('https://pokeapi.co/api/v2/pokemon');
</script>

<template>
  <h2>Conocer sobre mi</h2>
  <p v-if="loading" >Cargando datos ...</p>
  <h6>Aunque no me gustaban los pokemons, en honor a Dragon Ball, hacemos una excepción</h6>

  <div class="col-sm-12" v-if="data">
    <ul>
      <li v-for="pokes in data.results">
        <router-link :to="`/poke/${pokes.name}`">
          {{pokes.name}}
        </router-link>

      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
