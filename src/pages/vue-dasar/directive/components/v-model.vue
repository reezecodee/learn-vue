<script setup lang="ts">
import { ref } from 'vue';

let typingText = ref<string>('')
let modelLazy = ref<string>('')
let modelNumber = ref<string>('')
let modelTrim = ref<string>('')
</script>

<template>
<div class="flex justify-center flex-col">
    <p>{{ typingText }}</p>
    <input type="text" class="border-2 border-primary p-3 text-white" v-model="typingText" placeholder="Masukkan teks apapun">
</div>
<p class="text-center my-7">v-model juga mempunyai modifier seperti lazy, number, dan trim</p>
<div class="flex justify-between">
    <div>
        <p>Menggunakan modifier lazy: {{ modelLazy }}</p>
        <input type="text" class="border-2 border-primary p-3 text-white" v-model.lazy="modelLazy" placeholder="Masukkan teks apapun">
    </div>
    <div>
        <p>Menggunakan modifier number: {{ modelNumber }}</p>
        <input type="number" class="border-2 border-primary p-3 text-white" v-model.number="modelNumber" placeholder="Masukkan teks apapun">
    </div>
    <div>
        <p>Menggunakan modifier trim: {{ modelTrim }}</p>
        <input type="text" class="border-2 border-primary p-3 text-white" v-model.trim="modelTrim" placeholder="Masukkan teks apapun">
    </div>
</div>
</template>

<style scoped>

</style>