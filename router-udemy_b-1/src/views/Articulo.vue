<template>
  <Titulo texto="Ruta con parámetros"/>
  <h3>{{articulo.userId}}</h3>
  <h5>Parametro {{ $route.params.id }} - {{articulo.title}}</h5>
  <div >

    <p><i>{{articulo.id}}</i> {{articulo.body}}</p>
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
      articulo: {}
    }
  }
  ,
  methods: {
    async consumerArticulo() {
      try {
        let $route = this.$route;
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${$route.params.id}`)
        console.log(data);
        this.articulo = await data.json()
      } catch (e) {
        console.log(e)
      }
    }
  },
  created() {
    this.consumerArticulo()
  }
}
</script>

<style scoped>

</style>