<script setup lang="ts">
import { ref, onMounted } from 'vue';

const message = ref<string>("")

onMounted(() => {
    setTimeout(() => {
        message.value = "Ini adalah pesan yang ditampilkan setelah vue siap menampilkan konten"
    }, 5000);
})
</script>

<template>
    <div class="flex justify-center">
        <p v-cloak>{{ message }}</p>
    </div>
</template>

<style scoped>
[v-cloak] {
    display: none;
}
</style>