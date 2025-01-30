<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const name = ref<string>('')
const hobby = ref<string>('')
const age = ref<number | string>('')

const text = ref<string>('')

watchEffect(() => {
    console.log(`data yang diubah ${name.value} ${hobby.value} ${age.value}`)
    text.value = `${name.value} ${hobby.value} ${age.value}`
})
</script>

<template>
    <div class="flex justify-center">
        <input type="text" placeholder="Masukan nama..." class="border-2 border-primary p-3 text-white"
            v-model="name">
        <input type="text" placeholder="Masukan hobby..." class="border-2 border-primary p-3 text-white"
            v-model="hobby">
        <input type="number" placeholder="Masukan age..." class="border-2 border-primary p-3 text-white"
            v-model.number="age">
    </div>
    <p>{{ text }}</p>
</template>

<style scoped></style>