<template>
  <form @submit.prevent="procesarFormulario">
    <Input :coex="coex" />
  </form>
  <ListaCoex />
</template>

<script>
// @ is an alias to /src
import Input from "@/components/Input";
import ListaCoex from "@/components/ListaCoex";
import {mapActions} from 'vuex'

const shortid = require('shortid')

export default {
  name: 'HomeView',
  components: {
    ListaCoex,
    Input,
  },
  data() {
    return {
      coex: {
        id: '',
        name: '',
      }
    }
  },
  methods: {
    ...mapActions(['cargarRelacionesFamiliares']),
    procesarFormulario() {
      console.log(this.coex)
      if (this.coex.name.trim() === "") {
        console.log('vacío')
        return
      }

      // generar id
      this.coex.id = shortid.generate()
      console.log(this.coex.id)
      // enviaremos los datos

      this.coex = {
        id: '',
        name: '',
      }
    }
  },
}
</script>
