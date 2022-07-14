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

    <div class="mt-2">
      <div class="form-check form-check-inline">
        <input
            type="radio"
            id="radio-1"
            class="form-check-input"
            v-model="tarea.opciones"
            value="Si"
        >
        <label for="radio-1" class="form-check-label"> Si</label>
      </div>
      <div class="form-check form-check-inline">
        <input
            type="radio"
            id="radio-2"
            class="form-check-input"
            v-model="tarea.opciones"
            value="No"
        >
        <label for="radio-2" class="form-check-label"> No</label>

      </div>

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
        categorias: [],
        opciones: '',
      }
    }
  }
}
</script>
