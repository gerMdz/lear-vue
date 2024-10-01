<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Contador {{ $store.state.contador}}</h2>
    <BtnDisminuir />
    <input type="text" v-model="texto">
    <h2> {{texto}} </h2>

  </div>
</template>
<script>
import BtnDisminuir from "@/components/BtnDisminuir";
export default {
  name: 'AboutView',
  components: {
    BtnDisminuir
  },
  data(){
    return {
      texto: 'Mi texto'
    }
  }
}
</script>
