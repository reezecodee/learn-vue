<script setup lang="ts">
import Content from '@/pages/vue-dasar/directive/components/Content.vue';
import vText from '@/pages/vue-dasar/directive/components/v-text.vue';
import vHtml from '@/pages/vue-dasar/directive/components/v-html.vue';
import vShow from '@/pages/vue-dasar/directive/components/v-show.vue';
import vIf from '@/pages/vue-dasar/directive/components/v-if.vue';
import vIfElseifElse from '@/pages/vue-dasar/directive/components/v-if-else-if-else.vue';
import vFor from '@/pages/vue-dasar/directive/components/v-for.vue';
import vOn from '@/pages/vue-dasar/directive/components/v-on.vue';
import vBind from '@/pages/vue-dasar/directive/components/v-bind.vue';
import vModel from '@/pages/vue-dasar/directive/components/v-model.vue';
import vPre from '@/pages/vue-dasar/directive/components/v-pre.vue';
import vOnce from '@/pages/vue-dasar/directive/components/v-once.vue';
import vMemo from '@/pages/vue-dasar/directive/components/v-memo.vue';
import vCloak from '@/pages/vue-dasar/directive/components/v-cloak.vue';
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
    <Content title="V-On" description="Digunakan untuk mendengarkan event yang dilakukan oleh user">
        <vOn/>
    </Content>
    <Content title="V-Bind" description="Digunakan untuk mengikat attribute untuk melakukan operasi kode javascript">
        <vBind/>
    </Content>
    <Content title="V-Model" description="Digunakan untuk mengikat data yang di inputkan dari tag input, select, atau textarea">
        <vModel/>
    </Content>
    <Content title="V-Pre" description="Digunakan untuk mencegah vue memproses ekspresi apapun">
        <vPre/>
    </Content>
    <Content title="V-Once" description="Digunakan untuk memberitahu vue untuk merender sekali meskipun variable reaktif sudah berubah">
        <vOnce/>
    </Content>
    <Content title="V-Memo" description="Digunakan untuk memberitahu vue kapan waktunya untuk merender element">
        <vMemo/>
    </Content>
    <Content title="V-Cloak" description="Digunakan untuk menampilkan element ketika vue sudah siap">
        <vCloak/>
    </Content>
</template>

<style scoped></style>