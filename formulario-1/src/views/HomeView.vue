<template>
  <form>
    <input
        type="text"
        class="form-control my-2"
        placeholder="Ingrese nombre"
        v-model="tarea.nombre"
    >
    <div class="form-check form-check-inline">
      <input
      type="checkbox"
      id="check-1"
      class="form-check-input"
      v-model="tarea.categorias"
      value="JScript"
      >
      <label for="check-1" class="form-check-label"> JScript</label>

    </div>
    <div class="form-check form-check-inline">
      <input
      type="checkbox"
      id="check-2"
      class="form-check-input"
      v-model="tarea.categorias"
      value="Node"
      >
      <label for="check-2" class="form-check-label"> Node</label>

    </div>
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
        nombre: '',
        categorias: []
      }
    }
  }
}
</script>
