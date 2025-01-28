<script setup lang="ts">
const name: string = 'Budi'
const htmlFormat: string = `Hallo nama saya <b style="color: blue">${name}</b>, nama saya dikirim dengan html makanya bisa berwana biru`
</script>

<template>
<p v-html="htmlFormat"></p>
</template>

<style scoped>

</style>