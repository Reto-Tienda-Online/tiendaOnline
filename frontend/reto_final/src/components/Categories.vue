<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const categories = ref([]);

const getCategories = () => {
  const path = "http://192.168.1.75/all_categorias";
  axios
    .get(path)
    .then((response) => {
      categories.value = response.data;
      // console.log(categories.value);

    })
    .catch((error) => {
      console.error(error);
    });
};

onMounted(() => {
  getCategories();
});
</script>

<template>
  <div class="flex flex-col mt-10 ml-10">
    <h1 class="text-gray-200 text-4xl font-barlow">
      Categorías
      <font-awesome-icon icon="chevron-right" />
    </h1>
    <div class="grid grid-cols-3 gap-y-14 gap-x-7 mr-10 mt-14">
      <div 
        v-for="(item, index) in categories"
        :key="item.id"
        style="position: relative" 
        class="rounded-xl">
        <!--Las imagenes deben ser de todas las imagenes deben ser de 250px de altura da igual el ancho pero no mas de 250px -->
        <img
          src="../assets/t3.jpg"
          alt=""
          class="relative rounded-xl grayscale"
        />
        <h1
          class="absolute top-1/2 left-5 transform -translate-y-1/2 text-white font-barlow font-bold text-2xl"
        >
          {{ item.categoria }}
        </h1>
        <!--La imagen del personaje debe ser de s-->
        <img
          src="../assets/tw.png"
          alt=""
          class="w-1/2 absolute right-0 bottom-0 hover:scale-105 cursor-pointer transition-all duration-500 origin-bottom-right"
        />
      </div>
    </div>
  </div>
</template>
