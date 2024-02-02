<template>
  <main class="flex justify-center sm:flex-col w-full">
    <h2 class="text-center text-white text-xl font-bold my-4">
      LISTA DE FAVORITOS
    </h2>

    <div class="flex flex-wrap ml-36">
      <div
        v-for="producto in favoritos"
        :key="producto.id"
        @click="sendGameDetails(producto.producto)"
        class="w-[250px] flex flex-col text-white mx-4 justify-around bg-[#1f1f1f] px-2 py-2 rounded-md mb-4"
      >
        <div class="flex flex-row">
          <!-- Aquí muestra la imagen del producto -->
          <!--Imagen-->
          <picture>
            <img
              class="picture rounded-xl h-full w-full"
              :src="getImgURL(producto.id_producto)"
              loading="lazy"
            />
          </picture>
        </div>

        <div class="flex flex-col text-md">
          <div class="">
            <!-- Muestra el nombre del producto -->
            <span
              :title="`${producto.producto.producto} - ${producto.producto.descripcion}`"
              class="font-bold text-lg"
              >{{ producto.producto.producto }}</span
            >
          </div>

          <!-- Muestra la plataforma del producto -->
          <div class="text-sm text-gray-300">
            {{ producto.producto.plataforma.plataforma }}
          </div>
        </div>

        <div class="flex flex-rows justify-between items-center my-2">
          <div class="flex flex-col justify-center">
            <!-- Muestra el precio del producto -->
            <div class="price mx-2">
              {{ producto.producto.precio_unitario }}€
            </div>

            <!-- Muestra la decuento del producto -->
            <div class="mx-2 font-bold text-sm text-gray-300">
              {{ producto.producto.descuento.descuento }} %
            </div>
          </div>

          <!-- Selector de cantidad -->
          <select
            class="w-16 bg-gray-50 py-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            data-max="10"
          >
            <option value="0" disabled>0</option>
            <option v-for="quantity in 10" :key="quantity" :value="quantity">
              {{ quantity }}
            </option>
          </select>
        </div>

        <!-- Botón para mover a la bolsa -->
        <divm class="flex flex-row justify-between items-center">
          <button
            @click="addToShoppingCart(producto.id_producto)"
            class="flex justify-center px-4 py-1 mt-3 rounded-md text-sm text-white hover:text-resaltar"
          >
            <font-awesome-icon icon="shopping-cart" class="w-8 h-8" />
          </button>

          <a
            @click="eliminarDeFavoritos(producto.id_producto)"
            class="flex justify-center px-4 py-1 mt-3 rounded-md text-sm border-white text-white hover:border-resaltar"
          >
            <font-awesome-icon
              icon="heart"
              class="w-8 h-8 hover:text-white"
              :class="{ 'text-red-600': !favorito }"
            />
          </a>
        </divm>
      </div>
      <!--Aqui se cargara Una Imagen cuando no haya nada como FAV-->
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useStore } from 'vuex'

// SESSION MANAGEMENT CONSTANTS
const isLoggedIn = ref(false);
const usuario = ref({ nombre: "", id: "" }); // Agregamos id a la estructura del usuario
const router = useRouter();
const favoritos = ref([]);

const store = useStore()

// GET IMGS FROM PUBLIC FOLDER
const getImgURL = (id) => {
  const imgUrl = `/imgs/juegos/${id}/2.webp`;
  // console.log(imgUrl);
  return imgUrl;
};

// GET FAVORITOS FROM API
async function getFavoritos(id) {
  try {
    // Realiza la solicitud GET a la API utilizando Axios
    await axios.get(`listadeseo?id_usuario=${id}`).then(async (response) => {
      // console.log(response.data);
      favoritos.value = response.data;
      
    });
  } catch (error) {
    console.error("Error en la solicitud GET:", error);
  }
}

// ADD FAVORITO POST API
async function addToShoppingCart(producto_id) {
  try {
    await axios.post(`carrocompra`, {
      id_usuario: usuario.value.id,
      id_producto: producto_id,
    });
    // CUANDO SE AÑADA AL CARRITO, SE ELIMINA DE FAVORITOS
    eliminarDeFavoritos(producto_id);
    getFavoritos(usuario.value.id);
    console.log("Añadido al carrito");
  } catch (error) {
    console.error(error);
  }
}

// DELETE FAVORITO FROM API
async function eliminarDeFavoritos(producto_id) {
  const id_usuario = usuario.value.id;
  const id_producto = producto_id;
  try {
    await axios.delete(`listadeseo/${id_usuario}/${id_producto}`);
    getFavoritos(usuario.value.id);
  } catch (error) {
    console.error(error);
  }
}

// SEND GAME DETAILS TO GAME DETAIL PAGE 
const sendGameDetails = (juego) => {
  store.commit('setJuegoDetalle', juego);
  // console.log(juego)
  router.push('/juegoDetalle');
};

// Mounted
onMounted(() => {
  const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
  if (storedIsLoggedIn === "true") {
    isLoggedIn.value = true;
    usuario.value = JSON.parse(localStorage.getItem("usuario"));
    // Llamamos a la función getFavoritos con el id del usuario
    // console.log(usuario.value.id);
    getFavoritos(usuario.value.id);
  }
});
</script>
