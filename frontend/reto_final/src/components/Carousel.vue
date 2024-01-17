<script setup>
import { ref, onMounted } from "vue";

const images = ref(["https://picsum.photos/id/237/1024/800","https://picsum.photos/id/238/1024/800","https://picsum.photos/id/239/1024/800"]);
const active = ref(0)

onMounted(() => {
    let i = 0;
    setInterval(() => {
      if (i > images.value.length - 1) {
        i = 0;
      }
      active.value = i;
      i++;
    }, 5000);
})
</script>

<template>
  <div class="relative slide">
    <div class="carousel-inner relative overflow-hidden w-full">
      <div
        v-for="(img, i) in images"
        :id="`slide-${i}`"
        :key="i"
        :class="[active === i ? 'active' : 'left-full']"
        class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out"
      >
        <img class="block w-full" :src="img" alt="First slide" />
      </div>
    </div>
  </div>
</template>


<style scoped>
    .left-full {
			left: -100%;
		}

		.carousel-item {
            float: left;
			position: relative;
			display: block;
			width: 100%;
			margin-right: -100%;
			backface-visibility: hidden;
		}

		.carousel-item.active {
			left: 0;
		}
</style>