<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1
        :style="colorContador"
    >
      {{titulo}}: {{ contador }}
    </h1>
    <button @click="accionIncrementar">Aumentar</button>

  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'HomeView',
  data() {
    return {
      titulo: 'Mi contador V'
    }
  },
  components: {},
  computed: {
    ...mapState(["contador"]),
    colorContador() {
      return [this.contador > 51 ? {'color': 'green'} : {'color': 'red'}]
    }
  },
  methods: {
    ...mapMutations(['incrementar']),
    ...mapActions(['accionIncrementar'])
  }
}
</script>
