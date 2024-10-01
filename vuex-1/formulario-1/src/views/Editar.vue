<template>
  Editar {{ $route.params.id }} - {{ tarea }}
  <form @submit.prevent="updateTarea(tarea)">
    <Input :tarea="tarea" />
  </form>
</template>

<script>
import {mapState, mapActions} from "vuex";
import Input from "@/components/Input";

export default {
  name: "Editar",
  components: {
    Input
  },
  computed: {
    ...mapState(['tarea'])
  },
  methods: {
    ...mapActions(["setTarea", "updateTarea"])
  },
  created() {
    this.setTarea(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>