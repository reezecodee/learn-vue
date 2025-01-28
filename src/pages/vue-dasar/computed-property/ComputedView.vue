<script setup lang="ts">
import Content from '@/pages/vue-dasar/computed-property/components/Content.vue'
import BasicComputed from '@/pages/vue-dasar/computed-property/components/basic-computed.vue'
import GetterSetter from '@/pages/vue-dasar/computed-property/components/getter-setter.vue'
</script>

<template>
    <p class="mb-7">Computed Property merupakan nilai yang akan dihitung ketika salah satu dari data yang terkait
        berubah nilainya. Atau sederhanya melakukan operasi secara otomatis ketika variable reaktif berubah nilainya</p>
    <Content title="Dasar Computed Property"
        description="Berikut ini merupakan penggunaan computed property untuk menghitung pajak pertambahan nilai (PPN) 12% yang harus dibayarkan">
        <BasicComputed />
    </Content>
    <Content title="Computed Property Dengan Getter dan Setter"
        description="Getter digunakan untuk melakukan operasi untuk nilai yang dikembalikan, sedangkan setter digunakan untuk memodifikasi nilai yang akan dikembalikan">
        <GetterSetter />
    </Content>
</template>

<style scoped></style>