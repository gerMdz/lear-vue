<template>
  <Titulo texto="Ruta con parámetros"/>
  <h2>Parametro {{ $route.params.id }} - {{itemBlog.title}}</h2>
  <div v-bind:id="consumerApi">
    {{itemBlog.body}}
  </div>

</template>

<script>
import Titulo from "@/components/Titulo";



export default {
  name: "Articulo",
  components: {
    Titulo
  }
  , data() {
    return {
      itemBlog: Object
    }
  }
  ,
  methods: {

    async consumerApi() {
      try {

        let id = this.$route;
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id.params.id)
        this.itemBlog = await data.json()
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