<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Contador {{ $store.state.contador}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
