<script setup lang="ts">
import { ref, computed } from 'vue';

let list = ref<string>('')
let names = computed(() => {
    return list.value ? list.value.split(',').map(name => name.trim()) : [];
})
</script>

<template>
    <div class="flex justify-center items-center gap-20">
        <table class="border border-white">
            <thead class="border border-white">
                <tr>
                    <th>Nama</th>
                </tr>
            </thead>
            <tbody class="border border-white">
                <tr v-for="(value, index) in names" :key="index">
                    <td>{{ value }}</td>
                </tr>
            </tbody>
        </table>
        <input type="text" class="border-2 border-primary p-3 text-white" v-model="list">
    </div>
</template>

<style scoped></style>