<script setup>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  import { ref } from 'vue';

  const modules = ref([Autoplay, Pagination, Navigation])
</script>

<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper mt-10"
  >
    <swiper-slide>
      <img src="../assets/t1.jpg" alt="" class="mx-auto rounded-xl">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black"></div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/t2.jpg" alt="" class="mx-auto rounded-xl">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black"></div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/t3.jpg" alt="" class="mx-auto rounded-xl">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black"></div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/t4.jpg" alt="" class="mx-auto rounded-xl">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black"></div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/t5.jpg" alt="" class="mx-auto rounded-xl">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black"></div>
    </swiper-slide>
    
  </swiper>
</template>
