<template>
  <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea" />
  </form>
  <ListaTareas />
</template>

<script>
// @ is an alias to /src
import Input from "@/components/Input";
import ListaTareas from "@/components/ListaTareas";
import {mapActions} from 'vuex'

const shortid = require('shortid')

export default {
  name: 'HomeView',
  components: {
    Input,
    ListaTareas
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
        id: '',
        nombre: '',
        categorias: [],
        opciones: '',
        numero: 0
      }
    }
  },
}
</script>
