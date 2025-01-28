<script setup lang="ts">
import Content from '@/pages/vue-dasar/directive/components/Content.vue';
import vText from '@/pages/vue-dasar/directive/components/v-text.vue';
import vHtml from '@/pages/vue-dasar/directive/components/v-html.vue';
import vShow from '@/pages/vue-dasar/directive/components/v-show.vue';
import vIf from '@/pages/vue-dasar/directive/components/v-if.vue';
import vIfElseifElse from '@/pages/vue-dasar/directive/components/v-if-else-if-else.vue';
import vFor from '@/pages/vue-dasar/directive/components/v-for.vue';
</script>

<template>
    <Content title="V-Text" description="Digunakan untuk menyisipkan text kedalam html">
        <vText/>
    </Content>
    <Content title="V-HTML" description="Digunakan untuk menyisipkan text yang dirender kedalam html">
        <vHtml/>
    </Content>
    <Content title="V-Show" description="Digunakan untuk menampilkan elemet html. v-show mirip seperti display: none artinya tetap dirender oleh browser">
        <vShow/>
    </Content>
    <Content title="V-If" description="Digunakan untuk menampilkan elemet html. v-if berbeda dengan v-show, v-if tidak merender elemen html">
        <vIf/>
    </Content>
    <Content title="V-If Else-if Else" description="Digunakan untuk melakukan pengkondisian lanjutan dari if">
        <vIfElseifElse/>
    </Content>
    <Content title="V-For" description="Digunakan untuk melakukan perulangan dari data collection">
        <vFor/>
    </Content>
</template>

<style scoped></style>