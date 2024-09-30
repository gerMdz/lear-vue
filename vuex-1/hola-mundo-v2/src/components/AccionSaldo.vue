<template>
<button @click="accionHijo" :disabled="desactivar" >{{texto}}</button>

</template>

<script>
export default {
  name: "AccionSaldo",
  props: {
    texto: String,
    desactivar: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    accionHijo() {
      this.$emit('accion')
    }
  }
}
</script>

<style scoped>

</style>