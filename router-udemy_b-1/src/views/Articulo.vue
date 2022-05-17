<template>
  <Titulo texto="Ruta con parámetros"/>
  <h5>Parametro {{ $route.params.id }} - {{itemBlog.title}}</h5>
  <div >
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

        let ruta = this.$route;
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/'+ ruta.params.id)
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