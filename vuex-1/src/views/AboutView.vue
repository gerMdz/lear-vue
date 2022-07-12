<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Contador {{ $store.state.contador}}</h2>
    <BtnDisminuir />
  </div>
</template>
<script>
import BtnDisminuir from "@/components/BtnDisminuir";
export default {
  name: 'AboutView',
  components: {
    BtnDisminuir
  },
}
</script>
