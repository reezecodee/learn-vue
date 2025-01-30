<script setup lang="ts">

</script>

<template>
    <div class="px-20">
        <div class="flex justify-center my-20 gap-6">
            <RouterLink to="/vue-dasar/directive">
                <button class="btn btn-primary text-white">Belajar Directive</button>
            </RouterLink>
            <RouterLink to="/vue-dasar/computed-property">
                <button class="btn btn-primary text-white">Belajar Computed Property</button>
            </RouterLink>
            <RouterLink to="/vue-dasar/lifecycle-hooks">
                <button class="btn btn-primary text-white">Belajar Lifecycle Hooks</button>
            </RouterLink>
            <RouterLink to="/vue-dasar/watcher">
                <button class="btn btn-primary text-white">Belajar Watcher</button>
            </RouterLink>
        </div>
        <RouterView />
    </div>
</template>

<style scoped></style>