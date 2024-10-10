<template>
  <h2>Tipo: {{ cuenta }}</h2>
  <h2>Saldo: {{ saldo }}</h2>
  <h2>Cuenta: {{ estado ? 'Activa' : 'Desactivada' }}</h2>
  <div v-for="(servicio, index) in servicios" :key="index">
    {{ index + 1 }} {{ servicio }}
  </div>
  <AccionSaldo
      texto="Aumentar Saldo"
      @accion="aumentar"
  />
  <AccionSaldo
      texto="Disminuir Saldo"
      @accion="disminuir"
      :desactivar="desactivar"
  />
</template>

<script>
import AccionSaldo from "@/components/AccionSaldo";

export default {
  name: "Cuenta",
  components: {
    AccionSaldo
  },
  data() {
    return {
      cuenta: 'Visa',
      estado: true,
      servicios: ['transferencias', 'pagos', 'giros', 'cheques'],
      saldo: 1000,
      saldoTemp: null,
      desactivar: false
    }
  },
  methods: {
    aumentar() {
      this.saldo = this.saldo + 100
      this.desactivar = false
    },
    disminuir() {
      if (this.saldo <= 0) {
        alert('Saldo insuficiente');
        this.desactivar = true
        return
      }
      this.saldoTemp = this.saldo - 70
      if (this.saldoTemp <= 0) {
        alert('Saldo insuficiente');
        this.desactivar = true
        return
      }
      this.saldo = this.saldoTemp
    }
  }


}
</script>

<style scoped>
h1, h2 {
  color: #0f61ad;
}

</style>