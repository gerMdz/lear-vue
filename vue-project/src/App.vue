<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
const name = 'VUE dinámico'
const styleColor = "color: #1a1c80"
const arrayColores = ["blue", "red", "peru"]
const active = false
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Iniciando" />
    </div>
  </header>
  <section>
    <h1 > Hola desde Mendoza <br/> {{name.toUpperCase()}}</h1>
    <h2>{{arrayColores}}</h2>
    <h2 :style="`color: ${arrayColores[2]}`"> Azul </h2>
    <h3> {{active ? 'si' : 'no'}} </h3>
    <p > <span v-if="active"> Si </span><span v-else> No </span> Estoy activo</p>

    <p v-show="active"> Por show</p>

  </section>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
h1 {
  color: red;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
