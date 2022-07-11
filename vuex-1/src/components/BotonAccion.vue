<template>
<button>
  {{textoBoton}}
</button>
</template>

<script>
export default {
  name: "BotonAccion",
  props: {
    estado: Boolean
  },
  computed: {
    textoBoton(){
      return this.estado ? 'Aumentar': 'Disminuir'
    }
  }
}
</script>

