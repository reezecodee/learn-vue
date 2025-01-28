<script setup lang="ts">
import { ref } from 'vue';

let isShow = ref<boolean>(false)

function toggle(): void{
    isShow.value = !isShow.value
}
</script>

<template>
    <div class="flex justify-center items-center gap-7 select-none">
        <img v-show="isShow" src="https://i.pinimg.com/736x/ac/9f/51/ac9f5144a0db0279f7a307dd200aca7a.jpg" width="100" alt="" srcset="">
        <button class="btn btn-warning" v-on:click="toggle">Klik tombol</button>
    </div>
</template>

<style scoped></style>