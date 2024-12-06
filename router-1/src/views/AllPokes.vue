<script setup>
import {RouterLink} from "vue-router"
import {useGetData} from "@/composables/getData.js";
import * as net from "node:net";
import {useContadorStore} from '@/store/contador.js'
import {storeToRefs} from "pinia";

const usarContador = useContadorStore()
const {subir} = usarContador
const {doble, count} = storeToRefs(usarContador)

const {data, getData, loading, errorData} = useGetData()

getData('https://pokeapi.co/api/v2/pokemon');
</script>

<template>
  <div class="col-sm-12">
    <h2>Pokemons</h2>
    <p v-if="loading">Cargando datos ...</p>
    <h6>Aunque no me gustaban los pokemons, en honor a Dragon Ball, hacemos una excepción</h6>
    <h1>
      Inicio visitas: {{ count }}
    </h1>
    <h2>
      Y esto es el doble {{ doble }}
    </h2>
    <button @click="subir"> Aumentar</button>
    <div class="alert alert-danger mt-2" v-if="errorData">{{ errorData }}</div>

    <div class="col-sm-12" v-if="data">
      <ul class="list-group">
        <li v-for="pokes in data.results" class="list-group-item">
          <router-link :to="`/poke/${pokes.name}`">
            {{ pokes.name }}
          </router-link>
        </li>
      </ul>
      <div class="mt-2">

        <button :disabled="!data.previous" class="btn btn-warning m-1" @click="getData(data.previous)">
          Ant.
        </button>

        <button :disabled="!data.next" class="btn btn-secondary" @click="getData(data.next)">
          Sig.
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
