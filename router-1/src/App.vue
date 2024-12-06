<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import All from "@/views/AllPokes.vue";

</script>

<template>
  <div class="container">
    <nav class="navbar bg-white navbar-dark">


      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Api con Blue y Udemy
      </router-link>

      <router-link to="/" active-class="active">Home</router-link>
      <router-link to="/me" active-class="active">Yo</router-link>
      <router-link to="/favoritos" active-class="active">Favoritos</router-link>
      <router-link active-class="active" to="/all">Pokemons</router-link>


    </nav>

  <!--  <header>-->
  <!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

  <!--    <div class="wrapper">-->
  <!--      <HelloWorld msg="You did it!" />-->


  <!--      <nav>-->
  <!--        <RouterLink to="/">Inicio</RouterLink>-->
  <!--        <RouterLink to="/about">Acerca de</RouterLink>-->
  <!--        <RouterLink to="/me">Mi</RouterLink>-->
  <!--        <RouterLink to="/yo">Yo</RouterLink>-->
  <!--      </nav>-->
  <!--    </div>-->
  <!--  </header>-->
<!--  <div class="container text-center">-->
    <RouterView/>
  </div>

<!--  </div>-->
  <br>
  <div class="footer row">
    <footer>
      Un pie de página
    </footer>
  </div>

</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
  max-width: 100vw;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.container {
  width: 100vw;
}

nav footer {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
