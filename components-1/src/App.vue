<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import ButtonCounter from './components/ButtonCounter.vue'
import BlogPost from '@/components/BlogPost.vue'
import {computed, onMounted, ref} from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import PaginatePost from "@/components/PaginatePost.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const posts = ref([])

const inicio = ref(0);

const postPorPage = 10;

const fin = ref(postPorPage)

let loading = ref(true)


const sig = () => {
  inicio.value = inicio.value + postPorPage;
  fin.value = fin.value + postPorPage;
}
const ant = () => {
  inicio.value = inicio.value - postPorPage;
  fin.value = fin.value - postPorPage;
}

// Alternativa onMounted

// onMounted(async () => {
//   try {
//     const res = await fetch('http://jsonplaceholder.typicode.com/posts')
//     posts.value = await  res.json();
//   }catch (error) {
//
//   }finally {
//     loading.value = false
//   }
// })

// Alternativa fetch directo

// fetch('http://jsonplaceholder.typicode.com/posts')
//     .then((res) => res.json())
//     .then((data) => {
//       posts.value = data
//     })
//     .catch(e => console.log(e))
//     .finally(() => {
//       // Prueba de concepto para mostrar el spinner
//       // setTimeout(()=>{
//       //   loading.value = false
//       // },1000)
//       loading.value = false
//     })
//
// ;

// Alternativa fetch with async

const getData = async () => {
  try {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json();
  } catch (error) {

  } finally {
    loading.value = false
  }
}

getData()

const favorito = ref("");

// Propiedad computada
// Recibe una función de callback y debe recibir algo
// el .value. es en las funciones y no en el template

const maxLength = computed(() => posts.value.length)


const cambiarFavorito = (title) => {
  favorito.value = title
}
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


</script>


<template>

  <LoadingSpinner v-if="loading"/>
  <div class="container" v-else>
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>
      <h2>Mis post favoritos 63: <small>{{ favorito }}</small></h2>
    </header>
    <PaginatePost
        @next="sig" @ant="ant" :inicio="inicio" :fin="fin"
        :maxLength="maxLength"
        class="mb-2"/>


    <section class="col-sm-12">


      <h2>Mis posts</h2>
      <BlogPost
          v-for="post in posts.slice(inicio,fin)"
          :key="post.id"
          :id="post.id"
          :title="post.title"
          :body="post.body"
          :colorText="post.colorText"
          @cambiarFavoritoNombre="cambiarFavorito"
          class="mb-2"
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
