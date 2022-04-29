<template>
  <h2>Tipo: {{ cuenta }}</h2>
  <h2>Saldo: {{ saldo }}</h2>
  <h2>Cuenta: {{ estado ? 'Activa': 'Desactivada' }}</h2>
  <div v-for="(servicio, index) in servicios" :key="index">
    {{ index + 1  }} {{ servicio}}
  </div>

</template>

<script>
export default {
  name: "Cuenta",
  data() {
    return {
      cuenta: 'Visa',
      estado: true,
      servicios: ['transferencias', 'pagos', 'giros', 'cheques'],
      saldo: 1000,
    }
  }
}
</script>

<style scoped>
h1, h2{
  color: #0f61ad;
}

</style>