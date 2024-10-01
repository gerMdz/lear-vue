<script setup>

import {ref} from "vue";

let counter = ref(0)
const increment = () => counter.value ++
</script>
<template>
        <button @click="increment" class="btn btn-primary"> {{ counter }}</button>
</template>

