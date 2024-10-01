<template>
  <div class="about">
    <h1>Acerca de</h1>
  </div>
  <Yo />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script setup>
import Yo from "@/App.vue";
</script>
