<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import ButtonCounter from './components/ButtonCounter.vue'
import BlogPost from '@/components/BlogPost.vue'
import {ref} from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

const posts = ref([])

fetch('http://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => posts.value = data);

const favorito = ref("");


const cambiarFavorito = (title) => {
  favorito.value = title
}
<<<<<<< HEAD
<<<<<<< HEAD
// export default {


//   components: {ButtonCounter}
// }
// Esto es con setup con Composition
//
// import {ref} from "vue";
// export default {
//   setup() {
//     const counter = ref(0)
//
//     const increment = () => {
//       counter.value ++
//     }
//     return {
//       counter,
//       increment
//     }
//   }
// }

// Esto es Option API

// export default {
//   data(){
//     return {
//       counter: 0,
//     }
//   },
//   methods: {
//     increment(){
//       this.counter++
//     }
//   }
// }



const sig = () => {
  inicio.value +=  + postPorPage;
  fin.value +=  + postPorPage;
}
const ant = () => {
  inicio.value += - postPorPage;
  fin.value +=  - postPorPage;
}

</script>


<template>
  <div class="container-fluid">

    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>
      <h2>Mis post favoritos: <small>{{ favorito }}</small></h2>

    </header>
    <PaginatePost @next="sig" @ant="ant" :first="inicio" :end="fin" class="mb-2"/>



    <section class="col-sm-12">


    <section class="col-sm-12">


      <h2>Mis posts</h2>
      <BlogPost
          v-for="post in posts"
          :key="post.id"
          :id="post.id"
          :title="post.title"
          :body="post.body"
          :colorText="post.colorText"
          @cambiarFavoritoNombre="cambiarFavorito"
      >
      </BlogPost>

    </section>


  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
