<script setup>
defineProps({
    title: String,
    required: true
})
</script>

<template>
    <div class="flex flex-col mt-10 ml-10">
        <h1 class="text-gray-200 text-4xl font-barlow ">
            {{ title }}
            <font-awesome-icon icon="chevron-right" />
        </h1>
        <div class="grid grid-cols-3 gap-7 mr-10 mt-10">
            <div>
                <img src="../assets/juegos.jpg" alt="" class="rounded-xl">
                <div class="flex flex-row justify-between mt-2">
                    <h1 class="text-gray-200 font-barlow text-xl">Nombre</h1>
                    <h1 class="text-gray-200 font-barlow text-2xl">100€</h1>
                </div>
            </div>
            
            <img src="../assets/juegos.jpg" alt="" class="rounded-xl">
            <img src="../assets/test.jpg" alt="" class="rounded-xl object-cover w-full ">
            
            <img src="../assets/juegos.jpg" alt="" class="rounded-xl">
            <img src="../assets/juegos.jpg" alt="" class="rounded-xl">
            <img src="../assets/juegos.jpg" alt="" class="rounded-xl">

            <img src="../assets/juegos.jpg" alt="" class="rounded-xl">
            <img src="../assets/juegos.jpg" alt="" class="rounded-xl">
            <img src="../assets/juegos.jpg" alt="" class="rounded-xl">

            
        </div>
    </div>
</template>