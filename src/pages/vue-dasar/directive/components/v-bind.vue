<script setup lang="ts">
import { ref } from 'vue';
let isActive = ref<boolean>(false)

function toggle() {
    isActive.value = !isActive.value
}

const style = {
    color: 'red',
    fontSize: '30px'
}
</script>
<template>
    <div class="flex flex-col justify-center">
        <p v-bind:class="{ 'text-yellow-400': isActive, 'text-white': !isActive }">Ini adalah teks yang classnya di bind
            untuk merubah
            warna tergantung kondisi</p>
        <button @click="toggle" class="btn btn-warning mt-2">Click untuk merubah warna</button>
        <p>Selain itu, kita dapat membind attribut style dengan object javasscript</p>
        <p :style="style">Ini adalah teks yang stylenya dibuat dengan object javascript</p>
    </div>
</template>

<style scoped></style>