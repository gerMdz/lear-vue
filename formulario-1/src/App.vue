<template>
  <Navbar/>
  <div class="container">
    <router-view/>
  </div>
</template>

<style>

</style>
<script>
import Navbar from "@/components/Navbar";
import {mapActions} from 'vuex'

export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['cargarRelacionesFamiliares'])
  },
  created() {
    this.cargarRelacionesFamiliares()
  }
}
</script>