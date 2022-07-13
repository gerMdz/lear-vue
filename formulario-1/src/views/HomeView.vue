<template>
  <form>
    <input
        type="text"
        class="form-control my-2"
        placeholder="Ingrese nombre"
        v-model="tarea.nombre"
    >
  </form>
  <p>{{tarea}}</p>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {

  },
  data(){
    return {
      tarea: {
        nombre: ''
      }
    }
  }
}
</script>
