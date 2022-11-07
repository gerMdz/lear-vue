<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in coexs " :key="item.id">
      <th scope="row">{{ item.id }}</th>
      <td>{{ item.name }}</td>
    </tr>
    </tbody>
  </table>

</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "ListaCoexs",
  computed: {
    ...mapState(['coexs'])
  },
}
</script>

<style scoped>

</style>