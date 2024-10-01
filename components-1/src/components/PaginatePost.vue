<script setup>
// Si se necesita activar desde el componente
// se debe sacar el '$'
// const emit = defineEmits(['sig', 'ant'])
defineProps(["inicio","fin", "maxLength"])

</script>
<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button
        type="button"
        class="btn btn-outline-primary"
        @click="$emit('ant')"
        :disabled="inicio <= 0"

    >Anterior {{inicio}}
    </button>
    <button type="button" class="btn btn-outline-primary"
            @click="$emit('next')"
            :disabled="fin >= maxLength"
    >Siguiente {{fin}}</button>
  </div>
</template>

<style scoped>

</style>
