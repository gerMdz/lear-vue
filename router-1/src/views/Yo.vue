<script setup>
import axios from "axios";
import { ref } from "vue";

const pokemones = ref([])

const getData = async () => {
  try {
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon');
    console.log(data.results);

  } catch (e) {
    console.log(e)
  }
}

getData();
</script>

<template>
  <h1>Conocer sobre mi</h1>
</template>

<style scoped>

</style>
