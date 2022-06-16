<template>
  <button @click="accionDisminuir">Disminuir</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "BtnDisminuir",
  methods: {
    ...mapActions(['accionDisminuir'])
  }
}
</script>
