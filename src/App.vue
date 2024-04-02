<script setup>
import {RouterLink,RouterView} from 'vue-router'
import data from './assets/data.json'
import monkey from './assets/monkey.jpeg'
import {ref} from 'vue'
import {provide} from 'vue'
const dataset=data
provide('dataset',dataset)

</script>
<template>
  <div>
    <nav class="nav bg-teal-900 text-white py-[36px]">
      <div class="mx-auto container">
        <div class="flex justify-between">
          <RouterLink :to="{name:'home'}">Home</RouterLink>
          <div class="flex space-x-4">
            <RouterLink :to="{name:'about'}">About</RouterLink>
            <RouterLink :to="{name:'projects'}">My projects</RouterLink>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="container mx-auto">
          <RouterView></RouterView>
        </div>
    </main>
    <footer class="footer bg-teal-700 text-white text-center py-[36px]">
      <div class="container mx-auto">
        <p class="font-bold">@copyright|2024</p>
      </div>
    </footer>
  </div>
</template>