<template>
  <Titulo texto="Título de mi blog" />
  <button @click="consumerApi"> Consumer API </button>
  <ul v-for="item in arrayBlog" :key="item.id">
    <li>{{ item.title }}</li>
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
  }
}
</script>

<style scoped>

</style>