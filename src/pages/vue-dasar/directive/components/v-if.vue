<script setup lang="ts">
import { ref } from 'vue';

let input = ref<string>('')
const isTrue = ref<boolean | null>(null);
const submitted = ref<boolean>(false);

const handleSubmit = () => {
    submitted.value = true;
    isTrue.value = Number(input.value) === 20;
};
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div class="flex justify-center items-center">
            <div class="flex justify-center items-center gap-7 select-none">
                <img v-if="submitted && isTrue"
                    src="https://i.pinimg.com/736x/8b/21/15/8b2115145ac6c90305d4f39dc88d9a35.jpg" width="100"
                    alt="Benar">
                <img v-if="submitted && !isTrue"
                    src="https://i.pinimg.com/736x/a9/e7/0a/a9e70a4a9c958eb245c00db332ec3d9a.jpg" width="100"
                    alt="Salah">
                <div>
                    <p class="mb-2">Berapakah hasil dari 10 + 10</p>
                    <input type="number" class="border-2 border-primary p-3 text-white" v-model.lazy="input"
                        placeholder="Masukkan hasil">
                </div>
                <button class="btn btn-warning" type="submit">Cek hasilnya</button>
            </div>
        </div>
    </form>
</template>

<style scoped></style>