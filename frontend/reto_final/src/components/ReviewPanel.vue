<script setup>
import axios from "axios";
import { reactive, onMounted } from "vue";

/*{
    "id": 23,
    "resena": "Reseña para usuario Diego",
    "id_usuario": 9,
    "contenido": "Hellow",
    "id_juego": 1,
    "valoracion": 5
  } */
const bestComment = reactive({
  id: 0,
  resena: "",
  id_usuario: 0,
  contenido: "",
  id_juego: 0,
  valoracion: 1,
});

const getBestComment = () => {
  const path = "http://85.50.79.98:8080/highest_valoracion/18";
  axios
    .get(path)
    .then((response) => {
      Object.assign(bestComment, response.data);
      // console.log(bestComment.resena)
    })
    .catch((error) => {
      console.error(error);
    });
};

const getImgURL = () => {
  return `/imgs/juegos/${bestComment.id_juego}/1.png`;
};

onMounted(() => {
  getBestComment();
});
</script>

<template>
  <div class="text-white mt-20 flex flex-row justify-start bg-gray-800 p-10">
    <img :src="getImgURL()" alt="" class="w-1/3 -mt-20 -mb-10 relative" />
    <div class="flex flex-col justify-around text-center w-full">
      <h1 class="text-5xl">
        {{ "⭐".repeat(bestComment.valoracion) }}
      </h1>
      <q class="text-xl -mt-10 font-bold italic text-pretty">
        {{ bestComment.comentario }}
      </q>
      <h1 class="-mt-8 text-3xl font-bold">
        {{ bestComment.titulo }}
      </h1>
    </div>
  </div>
</template>
