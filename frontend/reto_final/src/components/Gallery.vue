<script setup>
import { ref } from "vue";

defineProps({
  title: String,
  required: true,
});

const isHovered = ref(false);
const video = ref(null);

const playVideo = () => {
  isHovered.value = true;
  video.value.play();
};

const stopVideo = () => {
  isHovered.value = false;
  video.value.stop();
};
</script>

<template>
  <div class="flex flex-col mt-10 ml-10">
    <h1 class="text-gray-200 text-4xl font-barlow">
      {{ title }}
      <font-awesome-icon icon="chevron-right" />
    </h1>
    <div class="grid grid-cols-3 gap-7 mr-10 mt-10">
        <div
          class="relative hover:scale-105 cursor-pointer transition-all duration-300"
          @mouseover="playVideo"
          @mouseout="stopVideo"
        >
          <picture v-if="!isHovered">
            <img
              class="picture rounded-xl"
              src="../assets/t2.jpg"
              loading="lazy"
            />
          </picture>
          <video
            v-else
            ref="video"
            preload="none"
            loop=""
            muted=""
            playsinline=""
            class="w-full h-full object-cover rounded-xl"
          >
            <source
              src="../assets/jokin/1/1.webm"
              type="video/webm"
            />
          </video>
        <div class="flex justify-between mt-3 transition-opacity duration-300 ease-in-out" :class="{ 'opacity-0': isHovered, 'opacity-100': !isHovered }">
          <h1 class="text-white">Nombre</h1>
          <h2 class="text-white">Precio</h2>
        </div>
      </div>

      <img src="../assets/creed.jpg" alt="" class="rounded-xl" />
      <img
        src="../assets/test.jpg"
        alt=""
        class="rounded-xl object-cover w-full"
      />

      <img src="../assets/godOfWar.jpg" alt="" class="rounded-xl" />
      <img src="../assets/gta.jpeg" alt="" class="rounded-xl" />
      <img src="../assets/ryse.jpg" alt="" class="rounded-xl" />

      <img src="../assets/warhammer.jpg" alt="" class="rounded-xl" />
      <img src="../assets/jokin/1/2.webp" alt="" class="rounded-xl" />
      <img src="../assets/witcher.jpg" alt="" class="rounded-xl" />
    </div>
  </div>
</template>
