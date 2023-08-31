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
      <td>{{ item.categorias.join(', ') }}</td>
      <td>{{ item.opciones }}</td>
      <td>{{ item.numero }}</td>
      <td>
        <button class="btn btn-danger btn-sm" @click="deleteTareas(item.id)">
          Eliminar
        </button>
        <router-link
            class="btn btn-warning ml-2 btn-sm"
            :to="{
              name: 'Editar',
              params: {
                id: item.id
              }
            }"
        >
          Editar
        </router-link>
      </td>
    </tr>
    </tbody>
  </table>

</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: "ListaTareas",
  computed: {
    ...mapState(['tareas'])
  },
  methods: {
    ...mapActions(['deleteTareas'])
  }
}
</script>

<style scoped>

</style>