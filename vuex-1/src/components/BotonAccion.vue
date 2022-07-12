<template>
<button
    @click="accionBoton({estado: estado, numero: 9})"
>
  {{textoBoton}}
</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "BotonAccion",
  props: {
    estado: Boolean
  },
  computed: {
    textoBoton(){
      return this.estado ? 'Aumentar': 'Disminuir'
    }
  },
  methods:{
    ...mapActions(['accionBoton'])
  }
}
</script>

