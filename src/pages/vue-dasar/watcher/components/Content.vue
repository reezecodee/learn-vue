<script setup lang="ts">
defineProps({
    title: String,
    description: String
})
</script>

<template>
    <div class="text-white">
        <h2 class="text-3xl font-semibold">{{ title }}</h2>
        <p class="mb-10">{{ description }}.</p>
        <slot></slot>
        <hr class="my-10 border-t-2 border-primary">
    </div>
</template>

<style scoped></style>