<script setup lang="ts">
import { ref, watch } from 'vue'

const firstName = ref<string>('')
const lastName = ref<string>('')

watch([firstName, lastName], ([newFirstName, newLastName], [oldFirstName, oldLastName]) => {
    console.log(`Nama baru adalah ${newFirstName} ${newLastName} sedangkan nama lamanya ${oldFirstName} ${oldLastName}`)
})
</script>

<template>
<div class="flex justify-center items-center gap-5">
    <input type="text" placeholder="Masukan nama depan apapun..." class="border-2 border-primary p-3 text-white"
        v-model="firstName">
    <input type="text" placeholder="Masukan nama belakang apapun..." class="border-2 border-primary p-3 text-white"
        v-model="lastName">
</div>
</template>

<style scoped></style>