<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const price = ref<number>(0)
const discount = ref<number>(0)
const total = ref<string>('')

const discountedPrice = computed({
    get: () => {
        const decimal = discount.value / 100
        return price.value * (1 - decimal)  
    },
    set: (newPrice: number) => {
        total.value = `Rp. ${newPrice.toFixed(2)}` 
    }
})

</script>

<template>
    <div class="flex justify-center items-center gap-10">
        <div>
            <label for="" class="block">Masukkan harga</label>
            <input type="number" placeholder="Masukkan harga" class="border-2 border-primary p-3 text-white"
                v-model.number="price">
        </div>
        <div>
            <label for="" class="block">Masukkan diskon</label>
            <input type="number" placeholder="Masukkan diskon" class="border-2 border-primary p-3 text-white"
                v-model.number="discount">
        </div>
        <p>Harga setelah diskon: {{ discountedPrice }}</p>
        <p>Total yang harus dibayar: {{ total }}</p>
    </div>
</template>

<style scoped></style>
