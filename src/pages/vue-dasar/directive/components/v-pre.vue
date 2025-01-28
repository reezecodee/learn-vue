<script setup lang="ts">
let name: string = 'Budi Gamtenk'
</script>

<template>
    <p>Elemet tanpa v-pre: {{ name }}</p>
    <p v-pre>Element dengan v-pre: {{ name }}</p>
</template>

<style scoped></style>