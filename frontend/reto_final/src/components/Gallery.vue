<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from "vue";

defineProps({
  title: String,
  required: true,
});

//DATA
const isHovered = ref(false);
const video = ref(null);
const juegos = ref([])

//METHODS
const setHovered = (boolean) => {
  isHovered.value = boolean;
}

const playVideo = (id) => {
  console.log(video.value)
  isHovered.value = true;
  video.play();
};

const stopVideo = (id) => {
  isHovered.value = false;
  video.stop();
};

const getJuegos = () => {
  const path = "http://192.168.1.75/all_productos";
  axios
    .get(path)
    .then((response) => {
      juegos.value = response.data.slice(0, 9).map((object) => ({...object}));
      // console.log(juegos.value);

    })
    .catch((error) => {
      console.error(error);
    });
}

const getImageURL = (id) => {
  return `/imgs/juegos/${id}/2.webp`
}

//HOOKS
onMounted(() => {
  getJuegos()
})

</script>

<template>
  <div class="flex flex-col mt-10 ml-10">
    <h1 class="text-gray-200 text-4xl font-barlow">
      {{ title }}
      <font-awesome-icon icon="chevron-right" />
    </h1>
    <div 
      class="grid grid-cols-3 gap-7 mr-10 mt-10">
        <div
          v-for="(juego, index) in juegos"
          :key="juego.id"
          class="relative hover:scale-105 cursor-pointer transition-all duration-300"
          @mouseover="playVideo(juego.id), setHovered(true)"
          @mouseout="stopVideo(juego.id), setHovered(false)"
        >
          <picture v-if="!isHovered">
            <img
              class="picture rounded-xl"
              :src=getImageURL(juego.id)
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
          <h1 class="text-white">{{ juego.producto }}</h1>
          <h2 class="text-white">{{ juego.precio_unitario }}€</h2>
        </div>
      </div>

    </div>
  </div>
</template>
