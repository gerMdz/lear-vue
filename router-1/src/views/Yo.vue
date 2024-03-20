<script setup>
import axios from "axios";
import { ref } from "vue";

import { RouterLink } from "vue-router"

const pokemones = ref([])

const getData = async () => {
  try {
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon');
    pokemones.value = data.results;

  } catch (e) {
    console.log(e)
  }
}

getData();
</script>

<template>
  <h1>Conocer sobre mi</h1>
  <h4>Aunque no me gustaban los pokemons, en honor a Dragon Ball, hacemos una excepción</h4>
  <div class="col-sm-12">
    <ul>
      <li v-for="pokes in pokemones">
        <router-link :to="`/poke/${pokes.name}`">
          {{pokes.name}}
        </router-link>

      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
