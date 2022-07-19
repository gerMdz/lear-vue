<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Categorías</th>
      <th scope="col">Opciones</th>
      <th scope="col">Número</th>
      <th scope="col">Acciones</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in tareas" :key="item.id">
      <th scope="row">{{ item.id }}</th>
      <td>{{ item.nombre }}</td>
      <td>
        <span v-for="(cat, index) in item.categorias" :key="index">
          {{
            item.categorias.length === index + 1 ? cat : cat + ', '
          }}
        </span>
      </td>
      <td>{{ item.opciones }}</td>
      <td>{{ item.numero }}</td>
      <td>Acción</td>
    </tr>
    </tbody>
  </table>

</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "ListaTareas",
  computed: {
    ...mapState(['tareas'])
  }
}
</script>

<style scoped>

</style>