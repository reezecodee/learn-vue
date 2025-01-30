<script setup lang="ts">
import Content from '@/pages/vue-dasar/watcher/components/Content.vue'
import BasicWatch from '@/pages/vue-dasar/watcher/components/basic-watch.vue'
import MultipleValue from '@/pages/vue-dasar/watcher/components/multiple-value.vue'
import WatchEffect from '@/pages/vue-dasar/watcher/components/watch-effect.vue'

</script>

<template>
    <p class="text-center mb-5">Watcher digunakan untuk memantau data reaktif. Silahkan buka console browser untuk
        melihat perubahannya</p>
    <h2 class="text-3xl font-bold mb-10">Watch</h2>
    <Content title="Watch Dasar" description="Digunakan untuk memantau satu data reaktif">
        <BasicWatch/>
    </Content>
    <Content title="Watch Multiple Value" description="Digunakan untuk memantau banyak data reaktif sekaligus">
        <MultipleValue/>
    </Content>
    <h2 class="text-3xl font-bold mb-10">WatchEffect</h2>
    <Content title="Watch Effect" description="Digunakan untuk memantau data reaktif yang dimasukkan kedalam fungsi watchEffect">
        <WatchEffect/>
    </Content>
</template>

<style scoped></style>