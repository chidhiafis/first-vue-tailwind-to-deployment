<template>
    <div>
        <section>
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
    
    </div>
</template>
<script setup>
import monkey from '../assets/monkey.jpeg'

</script>