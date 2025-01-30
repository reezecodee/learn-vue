<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
import Content from '@/pages/vue-dasar/lifecycle-hooks/components/Content.vue'


// ini akan dijalankan sebelum vue render komponen
// ini tidak cocok untuk manipulasi langsung dom, karena dom pada tahap ini belum siap
const messageOnBeforeMount = ref<string>('')

onBeforeMount(() => {
    console.log('onBeforeMount dijalankan sebelum komponen vue di render')
    messageOnBeforeMount.value = 'Ini adalah pesan dari onBeforeMount'
})

// ini akan dijalankan ketika vue sudah merender komponen
// ini sangat cocok untuk manipulasi element dom
const box = ref<HTMLElement | null>(null)
onMounted(() => {
    console.log('onMounted dijalankan sesudah vue merender komponen')
    if (box.value) {
        box.value.style.background = 'red'
    }
})

// ini akan dijalankan sebelum komponen dirender ulang akibat perubahan data reaktif
// dom belum sepenuhnya dirender ulang tetapi data sudah siap dan siap untuk memicu rendering ulang
const text = ref<string>('')
onBeforeUpdate(() => {
    console.log(`Komponen akan diperbarui, nilai text saat ini adalah ${text.value}`)
})

// ini akan dijalankan setiap kali ada perubahan pada data reaktif
const name = ref<string>('')
onUpdated(() => {
    console.log(`Nama telah diubah dan nama saat ini adalah ${name.value}`)
})

// ini akan dijalankan sebelum komponen dilepas dari dom
const counter = ref(0)
let interval: number

onMounted(() => {
    interval = setInterval(() => {
        counter.value++
        console.log('Counter:', counter.value)
    }, 1000)
})

onBeforeUnmount(() => {
    console.log('Komponen akan dihapus. Menghentikan interval...')
    clearInterval(interval)
})

// ini akan dijalankan ketika komponen dihapus dari dom
const timer = ref(0)
let interval2: number

onMounted(() => {
  interval2 = setInterval(() => {
    timer.value++
  }, 1000)
})

onUnmounted(() => {
  console.log('Komponen dihapus, menghentikan interval...')
  clearInterval(interval2)
})

</script>

<template>
    <h2 class="text-center mb-5">Silahkan sambil buka console browser karena semua output ada disana</h2>

    <Content title="onBeforeMount" description="Ini akan dijalankan sebelum vue merender komponen">
        <p>{{ messageOnBeforeMount }}</p>
    </Content>

    <Content title="onMounted" description="Ini dijalankan ketika vue sepenuhnya merender komponen">
        <p ref="box">Hallo dari onMounted</p>
    </Content>

    <Content title="onBeforeUpdate"
        description="Ini dijalankan sebelum komponen diperbarui akibat perubahan data reaktif">
        <p>Pesan: {{ text }}</p>
        <p>Panjang text: {{ text.length }}</p>
        <input type="text" placeholder="Masukan text apapun..." class="border-2 border-primary p-3 text-white"
            v-model="text">
    </Content>

    <Content title="onUpdated" description="Ini dijalankan ketika komponen diperbarui akibat perubahan data reaktif">
        <p>Nama: {{ name }}</p>
        <p>Panjang nama: {{ name.length }}</p>
        <input type="text" placeholder="Masukan nama apapun..." class="border-2 border-primary p-3 text-white"
            v-model="name">
    </Content>

    <Content title="onBeforeUnmount" description="Ini dijalankan sebelum komponen di lepas dari dom">
        <div>
            <p>Counter: {{ counter }}</p>
        </div>
    </Content>

    <Content title="onUnmounted" description="Ini dijalankan setelah komponen di lepas dari dom">
        <div>
            <p>Timer: {{ timer }}</p>
        </div>
    </Content>

</template>

<style scoped>
.box {
    width: 100px;
    height: 100px;
    border: 1px solid black;
}
</style>