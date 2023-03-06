<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import ButtonCounter from './components/ButtonCounter.vue'
import BlogPost from '@/components/BlogPost.vue'
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

      <ButtonCounter/>



      <div class="wrapper">
        <HelloWorld msg="You did it!"/>
        <!--      <button @click="increment"> {{ counter }}</button>-->
        <!--      <ButtonCounter />-->
      </div>
    </header>
    <section class="col-sm-12">
      <BlogPost title="Post 1" :id="1" body="descripcion 1" colorText="primary"/>
      <BlogPost title="Post 2" :id="2" body="descripcion 2" colorText="secondary"/>
      <BlogPost title="Post 3" :id="3" body="descripcion 3" colorText="info"/>
      <BlogPost title="Post 4" :id="4"  colorText="success"/>
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
