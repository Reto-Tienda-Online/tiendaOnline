<script setup>
import Navbar from './components/Navbar.vue';
import Carousel from './components/Carousel.vue';
import Gallery from './components/Gallery.vue';
import TrustPanel from './components/TrustPanel.vue';
import ReviewPanel from './components/ReviewPanel.vue';
import Categories from './components/Categories.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <Navbar/>
  <div class="mt-10 text-center">
    <h1 class="font-black text-4xl text-gray-200 font-barlow">
      Tienda de 
      <span class="text-indigo-600">Juegos</span>
      Online
    </h1>
  </div>
  <Carousel />
  <div id="tendencias">
    <Gallery title="Tendencias"/> <!--Lista de Juegos en Tendencia-->
  </div>
  <TrustPanel />
  <div id="reservas">
    <Gallery title="Reservas"/> <!--Lista de Juegos Coming Soon-->
  </div>
  <ReviewPanel /> <!--Pasar lista de comentarios positivos y coger uno random-->
  <!--Se podría poner mas comentarios pero esta en veremos-->
  <div id="bestSellers">
    <Gallery title="Más Vendidos"/>
  </div>
  <!--Colocar algo en medio aqui-->
  <Categories />
  <Footer />
  
</template>

