<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import ButtonCounter from './components/ButtonCounter.vue'
import BlogPost from '@/components/BlogPost.vue'
import {ref} from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

const posts = ref([
  {title: 'Post 1', id: '1', body: 'description 1', colorText: 'primary'},
  {title: 'Post 2', id: '2', body: 'description 2', colorText: 'secondary'},
  {title: 'Post 3', id: '3', body: 'description 30', colorText: 'info'},
  {title: 'Post 4', id: '4', body: '', colorText: 'success'}
])

const favorito = ref("");


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
  <div class="container">

    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>
      <h2>Mis post favoritos: {{favorito}}</h2>
<!--      <ButtonCounter/>-->


      <div class="wrapper">
        <HelloWorld msg="You did it!"/>
        <!--      <button @click="increment"> {{ counter }}</button>-->
        <!--      <ButtonCounter />-->
      </div>
    </header>


    <section class="col-sm-12">
      <h2>Mis posts</h2>
      <BlogPost
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :body="post.body"
          :colorText="post.colorText"
          @cambiarFavorito="cambiarFavorito"
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
