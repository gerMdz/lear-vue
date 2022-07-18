<template>
  <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea" />
  </form>
  <p>{{ tarea }}</p>
</template>

<script>
// @ is an alias to /src
import Input from "@/components/Input";
import {mapActions} from 'vuex'
const shortid = require('shortid')

export default {
  name: 'HomeView',
  components: {
    Input
  },
  data() {
    return {
      tarea: {
        id: '',
        nombre: '',
        categorias: [],
        opciones: '',
        numero: 0
      }
    }
  },
  methods: {
    ...mapActions(['setTareas']),
    procesarFormulario() {
      console.log(this.tarea)
      if (this.tarea.nombre.trim() === "") {
        console.log('vacío')
        return
      }

      // generar id
      this.tarea.id = shortid.generate()
      console.log(this.tarea.id)
      // enviaremos los datos
      this.setTareas(this.tarea)
      this.tarea = {
        nombre: '',
        categorias: [],
        opciones: '',
        numero: 0
      }
    }
  },
}
</script>
