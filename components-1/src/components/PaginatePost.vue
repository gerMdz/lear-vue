<script setup>
// Si se necesita activar desde el componente
// se debe sacar el '$'
// const emit = defineEmits(['sig', 'ant'])
defineProps(["first","end"])
</script>
<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button
        type="button"
        class="btn btn-outline-primary"
        @click="$emit('ant')"
        :disabled="first <= 0"

    >Anterior {{first}}
    </button>
    <button type="button" class="btn btn-outline-primary" @click="$emit('next')"
            :disabled="end === 0"
    >Siguiente {{end}}</button>
  </div>
</template>

<style scoped>

</style>
