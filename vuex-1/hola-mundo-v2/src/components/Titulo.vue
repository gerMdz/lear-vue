<template>
<h1> Mi banco 2.0 {{ texto}}</h1>
</template>

<script>
export default {
  name: "Titulo",
  props: {
    texto: String,
  }
}
</script>

<style scoped>
h1 {
  color: darkslateblue;
}
</style>