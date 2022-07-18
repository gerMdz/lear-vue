<template>
  <div class="mt-2">
    <input
        type="text"
        class="form-control my-2"
        placeholder="Ingrese nombre"
        v-model.trim="tarea.nombre"
    >
  </div>
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

  <div class="mt-2">
    <input
        type="number"
        class="form-control"
        v-model.number="tarea.numero"
    >
  </div>
  <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="bloquear">
    Procesar
  </button>
</template>

<script>
export default {
  name: "Input",
  props: {
    tarea: Object,
  },
  computed: {
    bloquear() {
      return this.tarea.nombre.trim() === "";
    }
  }
}
</script>

<style scoped>

</style>