<script setup>
import Navbar from './components/Navbar.vue';
import Carousel from './components/Carousel.vue';
import Gallery from './components/Gallery.vue';
import TrustPanel from './components/TrustPanel.vue';
import Reservas from './components/Reservas.vue';
import ReviewPanel from './components/ReviewPanel.vue';

</script>

<template>
  <Navbar />
  <div class="mt-10 text-center">
    <h1 class="font-black text-4xl text-gray-200 font-barlow">
      Tienda de 
      <span class="text-indigo-600">Juegos</span>
      Online
    </h1>
  </div>
  <Carousel />
  <Gallery title="Tendencias"/> <!--Lista de Juegos en Tendencia-->
  <TrustPanel />
  <Gallery title="Reservas"/> <!--Lista de Juegos Coming Soon-->
  <ReviewPanel /> <!--Pasar lista de comentarios positivos y coger uno random-->
  
  
</template>

