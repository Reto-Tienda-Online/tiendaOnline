<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from "vue";

defineProps({
  title: String,
  required: true,
});

/*
  isHovered -> Aplica a todos
  isHovered -> [1,1,1,1,1,1,1,1,1]

  index -> imagen
  index -> 3
  isHovered -> [1,1,0,1,1,1,1,1,1]
*/

//DATA
const isHovered = ref([1,1,1,1,1,1,1,1,1]);
const video = ref([]);
const juegos = ref([])

//METHODS
const playVideo = (id) => {
  // console.log("video.value:", video.value); 
  const playVideo = video.value[id-1].play();
  isHovered.value[id-1] = 0;
  // console.log(isHovered.value)
  if (playVideo !== undefined) {
    playVideo.then(_ => {
      
    })
    .catch(error => {
    });
  }
};

const stopVideo = (id) => {
  const pauseVideo = video.value[id-1].pause();
  isHovered.value[id-1] = 1;

  if (pauseVideo !== undefined) {
    pauseVideo.then(_ => {
      
    })
    .catch(error => {
    });
  }
}; 

const getJuegos = () => {
  const path = "http://85.50.79.98:1580/all_productos";
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

const getVideoURL = (id) => {
  return `/imgs/juegos/${id}/1.webm`
}

//HOOKS
onMounted(() => {
  getJuegos()
  // console.log(video.value)
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
          @mouseover="playVideo(juego.id)"
          @mouseout="stopVideo(juego.id)"
        >
          <picture v-show="isHovered[index] === 1">
            <img
              class="picture rounded-xl"
              :src=getImageURL(juego.id)
              loading="lazy"
            />
          </picture>
          <video
            v-show="isHovered[index] !== 1"
            ref="video"
            preload="none"
            loop=""
            muted=""
            playsinline=""
            class="w-full h-full object-cover rounded-xl"
          >
            <source
              :src=getVideoURL(juego.id)
              type="video/webm"
            />
          </video>
        <div class="flex justify-between mt-3 transition-opacity duration-300 ease-in-out" :class="{ 'opacity-0': isHovered[index] === 0, 'opacity-100': isHovered[index] === 1 }">
          <h1 class="text-white">{{ juego.producto }}</h1>
          <h2 class="text-white">{{ juego.precio_unitario }}€</h2>
        </div>
      </div>

    </div>
  </div>
</template>