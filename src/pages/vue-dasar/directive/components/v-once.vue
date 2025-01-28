<script setup lang="ts">
import { ref } from 'vue';

let counter = ref<number>(0)

function increment(): void {
    counter.value++
}
</script>

<template>
    <div class="flex justify-center gap-10">
        <p>Tanpa v-once: {{ counter }}</p>
        <p v-once>Dengan v-once: {{ counter }}</p>
    </div>
    <div class="flex justify-center">
        <button class="btn btn-warning mt-7" @click="increment">Naikkan angka</button>
    </div>
</template>

<style scoped></style>