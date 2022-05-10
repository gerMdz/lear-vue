<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Titulo texto="Págino de inicio" />
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
 import Titulo from "@/components/Titulo";
export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    Titulo
  }
}
</script>
