<template>
  <div class="mt-2">
    <!--    <input-->
    <!--        type="text"-->
    <!--        class="form-control my-2"-->
    <!--        placeholder="Ingrese nombre"-->
    <!--        v-model.trim="tarea.nombre"-->
    <!--    >-->
  </div>


  <!--  <div class="form-check form-check-inline">-->
  <!--    <input-->
  <!--        type="checkbox"-->
  <!--        id="check-1"-->
  <!--        class="form-check-input"-->
  <!--        v-model="coex"-->
  <!--        value="JScript"-->
  <!--    >-->
  <!--    <label for="check-1" class="form-check-label"> JScript</label>-->

  <!--  </div>-->
  <!--  <div class="form-check form-check-inline">-->
  <!--    <input-->
  <!--        type="checkbox"-->
  <!--        id="check-2"-->
  <!--        class="form-check-input"-->
  <!--        v-model="coexs"-->
  <!--        value="Node"-->
  <!--    >-->
  <!--    <label for="check-2" class="form-check-label"> Node</label>-->

  <!--  </div>-->

  <div class="mt-2">
    <h6>n</h6>
    <div v-for="coex in coexs" :key="coex.id">
      <input type="radio" :value=coex.name>
      <span>{{ coex.name }}</span>
    </div>

  </div>



  <!--  <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="bloquear">-->
  <!--    Procesar-->
  <!--  </button>-->
</template>

<script>
import {mapState} from 'vuex'
import ListaCoex from "@/components/ListaCoex";


export default {
  name: "Input",
  // data() {
  //   return {
  //     coexs: ListaCoex,
  //     checked: ''
  //   }
  // },
  computed: {
    ...mapState(['coexs'])
  },
}
</script>

<style scoped>

</style>