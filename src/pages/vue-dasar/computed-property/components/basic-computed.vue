<script setup lang="ts">
import { ref, computed } from 'vue';

let nilaiPembelian = ref<number>(0)

let total: number = computed(() => {
    return 0.12 * nilaiPembelian.value
})

let harusBayar: number = computed(() => {
    return nilaiPembelian.value + total.value
})
</script>

<template>
    <div class="flex justify-center gap-10 items-center">
        <p class="text-2xl">PPN 12%</p>
        <p class="text-2xl">x</p>
        <input type="number" class="border-2 border-primary p-3 text-white" v-model.number="nilaiPembelian">
        <p class="text-2xl">=</p>
        <p class="text-2xl text-red-500">Rp. {{ total }}</p>
    </div>
    <p>Total yang harus kamu bayar adalah: <b class="text-red-500">Rp. {{ harusBayar }}</b></p>
</template>

<style scoped></style>