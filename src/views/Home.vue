<script setup>
import data from '../assets/data.json'
import monkey from '../assets/monkey.jpeg'
import {ref} from 'vue'
import {provide} from 'vue'
const dataset=data
provide('dataset',dataset)
</script>
<template>
    <div>
        <section class="bg-slate-50 text-dark text-center py-[36px]">
        
      </section>
      <section class="bg-white py-[36px]">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="rounded-xl shadow-sm p-4">
              <img :src="monkey" class="object-fill mx-auto opacity-35">
            </div>
            <div class="rounded-xl shadow-sm text-justify bg-white p-4">
              <h1 class="font-bold p-3 mb-2 text-[34px]">Hello i am ochieng odhiambo</h1>
              <p class="p-2 mb-2 text-[24px]">i am an enthusiasting software developer with a vast knowledn</p>
              <p class="p-2 mb-2 text-[24px]">i have delved in the following projects and its a worthwhile journey</p>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-slate-50 py-[36px]">
        <div class="mx-auto">
          <div class="flex flex-col">
            <h3 class="p-4 mb-4 text-center text-[34px] font-bold">My project</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class="bg-white rounded-2xl p-4 shadow-md mb-3 mx-4" v-for="p in dataset" :key="p.id">
                <h2 class="mb-2 font-bold text-[34px] p-3">{{ p.title }}</h2>
                <p class="p-3 text-[22px]"> {{ p.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr/>
      <section class="py-[36px] bg-white px-4 text-center">
        <div class="mx-auto">
          <div class="flex flex-col">
            <h1 class="px-4 text-[22px] mb-5">contact me</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <p class="bg-white rounded-2xl border-2 p-4">ochiengodhiambo56@gmail.com</p>
              <p class="bg-white rounded-2xl border-2 p-4">ochiengodhiambo56@gmail.com</p>
            </div>
            <p class="bg-white rounded-2xl border-2 p-4">ochiengodhiambo56@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
</template>