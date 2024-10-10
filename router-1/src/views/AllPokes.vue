<script setup>
import { RouterLink } from "vue-router"
import { useGetData } from "@/composables/getData.js";
import * as net from "node:net";
const {data, getData, loading, errorData} = useGetData()

getData('https://pokeapi.co/api/v2/pokemon');
</script>

<template>
  <h2>Conocer sobre mi</h2>
  <p v-if="loading" >Cargando datos ...</p>
  <h6>Aunque no me gustaban los pokemons, en honor a Dragon Ball, hacemos una excepción</h6>
  <div class="alert alert-danger mt-2" v-if="errorData">{{ errorData}}</div>

  <div class="col-sm-12" v-if="data">
    <ul>
      <li v-for="pokes in data.results">
        <router-link :to="`/poke/${pokes.name}`">
          {{pokes.name}}
        </router-link>
      </li>
    </ul>
    <button :disabled="!data.previous" class="btn btn-warning m-1" @click="getData(data.previous)">
      Ant.
    </button>

    <button :disabled="!data.next" class="btn btn-secondary" @click="getData(data.next)">
      Sig.
    </button>
  </div>
</template>

<style scoped>

</style>
