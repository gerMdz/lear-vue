<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Titulo texto =' - dinámico 2.0'/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Titulo from "@/components/Titulo";

export default {
  name: 'App',
  components: {
    Titulo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
