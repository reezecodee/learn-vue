<script setup lang="ts">
import { ref, watch } from 'vue'

const name = ref<string>('')

watch(name, (newName, oldName) => {
    console.log(`nama diubah dari ${oldName} ke ${newName}`)
})
</script>

<template>
    <input type="text" placeholder="Masukan nama apapun..." class="border-2 border-primary p-3 text-white"
        v-model="name">
</template>

<style scoped></style>