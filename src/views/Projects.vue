<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
              <div class="bg-white rounded-2xl p-4 shadow-md mb-3 mx-4" v-for="p in data" :key="p.id">
                <h2 class="mb-2 font-bold text-[34px] p-3">{{ p.title }}</h2>
                <p class="p-3 text-[22px]"> {{ p.description }}</p>
              </div>
            </div>
    </div>
</template>
<script setup>
import {inject} from 'vue'

const data=inject('dataset')
console.log(data)
</script>

