<template>
  Editar {{ $route.params.id }} - {{ tarea }}
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "Editar",
  computed: {
    ...mapState(['tarea'])
  },
  methods: {
    ...mapActions(['serTarea'])
  },
  created() {
    this.serTarea(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>