<script setup>
import Navbar from './components/Navbar.vue';
import Carousel from './components/Carousel.vue';
</script>

<template>
  <Navbar />
  <div class="mt-10 text-center">
    <h1 class="font-black text-4xl text-gray-200">
      Tienda de 
      <span class="text-secondary">Juegos</span>
      Online
    </h1>
  </div>
  
  <div class="flex items-center justify-center h-screen w-1/2">
    <Carousel />
  </div>
  
</template>

