<template>
  <Titulo texto="Título de mi blog"/>
  <!--  <button @click="consumerApi"> Consumer API </button>-->
  <ul v-for="item in arrayBlog" :key="item.id">
    <li>
      <router-link :to="`/blog/${item.id}`">
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import Titulo from "@/components/Titulo";

export default {
  name: "Blog",
  components: {
    Titulo
  },
  data() {
    return {
      arrayBlog: []
    }
  }
  ,
  methods: {
    async consumerApi() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        this.arrayBlog = await data.json()
      } catch (e) {
        console.log(e)
      }
    }
  },
  created() {
    this.consumerApi()
  }
}
</script>

<style scoped>

</style>