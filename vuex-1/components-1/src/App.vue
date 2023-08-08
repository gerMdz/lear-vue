<script setup>

import {ref} from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import BlogPost from '@/components/BlogPost.vue'
import PaginatePost from "@/components/PaginatePost.vue";

const posts = ref([])
const postPorPage = 10
const inicio = ref(0)
const fin = ref(postPorPage)

fetch('http://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => posts.value = data);

const favorito = ref("");


const cambiarFavorito = (title) => {
  favorito.value = title
}
</script>

<template>
  <div class="container-fluid">

    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>
      <h2>Mis post favoritos: <small>{{ favorito }}</small></h2>

    </header>

    <section class="col-sm-12">
      <PaginatePost class="mb-2"/>
      <h2>Mis posts</h2>
      <BlogPost
          v-for="post in posts.slice(inicio,fin)"
          :key="post.id"
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
