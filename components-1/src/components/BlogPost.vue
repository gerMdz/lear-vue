<script setup>
// const props = defineProps(['title', 'id', 'body', 'colorText'])
// console.log(props.title)

defineProps({
  title: String,
  id: Number,
  body: {
    type: String,
    default: "Sin descripción"
  },
  colorText: String
})

const emit = defineEmits(['cambiarFavoritoNombre'])
</script>
<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ id }} {{ title }}</h5>
      <p :class="`text-${colorText}`"> {{ body }}</p>
      <button class="btn btn-outline-primary"
              @click="emit('cambiarFavoritoNombre', title)">
        Favorito
      </button>
    </div>
  </div>

</template>


<style scoped>

</style>
