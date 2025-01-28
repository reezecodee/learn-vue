<script setup lang="ts">
function click() {
    alert('Hellooo')
}
</script>

<template>
    <div class="flex justify-center">
        <div>
            <p>Klik tombol dengan tombol mouse sebelah kanan</p>
            <button class="btn btn-warning" v-on:click.right="click">Klik saya</button>
        </div>
    </div>
</template>

<style scoped></style>