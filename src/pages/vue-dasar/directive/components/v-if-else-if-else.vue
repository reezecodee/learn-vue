<script setup lang="ts">
import { ref } from 'vue';

let value = ref<number>(0)
</script>

<template>
    <div class="flex gap-20 justify-center items-center">
        <div v-if="value >= 80">
            <img src="https://i.pinimg.com/736x/6e/1c/84/6e1c844d120f9758bc28636f23aa077d.jpg" width="150" alt=""
                srcset="">
            <p>Wujud aseli anak rajin😹</p>
        </div>
        <div v-else-if="value >= 60">
            <img src="https://i.pinimg.com/736x/17/98/3a/17983abf8898c9339e7172275db705c6.jpg" width="150" alt=""
                srcset="">
            <p>Wujud aseli anak rajin sedikit malas</p>
        </div>
        <div v-else-if="value < 60 && value != 0">
            <img src="https://i.pinimg.com/736x/4d/c8/b1/4dc8b1412b5d7882fb95f5ccc7c248a0.jpg" width="150" alt=""
                srcset="">
            <p>Jirr parah banget cok, mending lu belajar dah</p>
        </div>
        <div v-else>
            Hasil akan muncul disini...
        </div>
        <div>
            <label for="" class="block">Masukkan nilai dulu le</label>
            <input type="number" class="border-2 border-primary p-3 text-white" v-model.lazy="value">
        </div>
    </div>
</template>

<style scoped></style>