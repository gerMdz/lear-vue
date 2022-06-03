<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Contador {{ contador}}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'HomeView',
  components: {
  },
  computed: {
    ...mapState(["contador"])
  }
}
</script>
