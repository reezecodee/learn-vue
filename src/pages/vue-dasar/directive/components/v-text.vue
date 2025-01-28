<script setup lang="ts">
const name: string = 'Budi'
const sayHello: string = `Hallo saya ${name}, nama saya dikirim melalui v-text`
</script>

<template>
<p v-text="sayHello"></p>
</template>

<style scoped>

</style>