<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onMounted, ref, reactive, watch } from "vue";
import axios from "axios";

const router = useRouter();
const store = useStore();
const juegosEnCarrito = ref([]);
const precioTotal = ref(0);


const seeGameDetails = (juego) => {
  console.log(juego)
  store.commit("setJuegoDetalle", juego);
  router.push("/juegoDetalle");
};
const getImageURL = (id) => {
  return `/imgs/juegos/${id}/2.webp`;
};


const getPrecioTotal = () => {
  precioTotal.value = 0;
  for (const item of juegosEnCarrito.value) {
    const juego = item["producto"];
    
    if (item.cantidad) {
      precioTotal.value += parseFloat(juego.precio_unitario) * item.cantidad;
    } else {
      precioTotal.value += parseFloat(juego.precio_unitario);
    }
  }
};

const payForAll = () => {
    router.push('/pago')
};

const deleteCartItem = (idItem) => {
  
  //DELETE FROM DATABASE
  const config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `http://85.50.79.98:8080/carrocompra/${idItem}`,
    headers: {},
  };
  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  //DELETE FROM STORE
  store.commit('deleteItem', idItem)

  //DELETE FROM LOCAL STORAGE
  localStorage.removeItem('shopcart')

  //ACTUALIZAMOS EL STATE PARA QUE SE VISUALICEN LOS CAMBIOS EN LA PAGINA
  juegosEnCarrito.value = juegosEnCarrito.value.filter((item) => {
    return item.id !== idItem
  })

};

onMounted(() => {
  const idUser = JSON.parse(localStorage.getItem("usuario")).id;
  const path = `http://85.50.79.98:8080/carrocompra?id_usuario=${idUser}`;
  axios
    .get(path)
    .then((response) => {
      juegosEnCarrito.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });

  // console.log(juegosEnCarrito.value);

  getPrecioTotal();
});

watch(
  juegosEnCarrito,
  () => {
    getPrecioTotal();
  },
  {
    deep: true,
  }
);


</script>

<template>
  <main class="flex xl:flex-row justify-center sm:flex-col w-full mt-10">
    <!--COMPRAS-->
    <div
      v-if="juegosEnCarrito.length > 0" 
      class="flex flex-col gap-5">
      <div
        v-for="(juego, index) in juegosEnCarrito"
        :key="juego.id"
        class="text-white w-[745px] mx-4"
      >
        <!--Contenido del juego a comprar a repetir segun la cantidad de juegos en el carrito-->
        <div
          class="flex flex-row justify-around bg-[#1f1f1f] w-full px-5 py-5 rounded-xl"
        >
          <div class="cover" @click="seeGameDetails(juego['producto'])">
            <picture
              ><img
                :alt="juego['producto'].producto"
                :src="getImageURL(juego['producto'].id)"
                loading="lazy"
                class="rounded-xl max-w-96"
            /></picture>
          </div>
          <div class="flex flex-col text-md max-w-32">
            <div class="name">
              <!--Aqui ira el icono de-->
              <div class="platform platform-steam">
                <div class="icon-s icon-steam"></div>
              </div>
              <span title="New Cycle - Europe" class="font-bold text-lg">{{
                juego["producto"].producto
              }}</span>
            </div>
            <div class="text-sm text-gray-300">
              {{ juego["producto"].plataforma.plataforma }}
            </div>
            <!--Delete icon-->
            <div
              class="text-sm py-6 text-gray-300 flex flex-row hover:underline cursor-pointer"
              @click="deleteCartItem(juego.id)"
            >
              <div><font-awesome-icon icon="trash" /></div>
              <div class="moveToWishlist ml-2">Eliminar del carrito</div>
            </div>
            <div class="">
              <div class="price text-2xl">
                {{ juego["producto"].precio_unitario }}€
              </div>
              <select
                class="w-full mt-5 bg-gray-50 py-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                data-max="10"
                v-model="juego.cantidad"
              >
                <option value="0" disabled="disabled">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
          <!---->
        </div>
      </div>
    </div>
    <div
    v-else
    >
      <h1
        
        class="text-xl text-white text-center"
      >
      El carrito de compras esta vacío
      </h1>
      <picture>
        <img 
          src="/imgs/empty_shopcart.png"
          class=" max-w-96"
        />
      </picture>
      <h1
        
        class="text-xl text-white text-center"
      >
      No pierdas tiempo compra ya...
      </h1>
    </div>
    <!--RESUMEN DE COMPRAS-->
    <div 
      v-if="juegosEnCarrito.length > 0"
      class="flex flex-col">
      <div class="text-white w-[395px] mx-4">
        <div
          class="flex flex-col justify-center w-full bg-[#1f1f1f] px-5 py-5 rounded-xl"
        >
          <div class="flex justify-between">
            <span>Precio</span> <span>{{ precioTotal }}€</span>
          </div>
          <div class="flex justify-between font-bold text-2xl my-3">
            <span>Subtotal</span> <span>{{ precioTotal }}€</span>
          </div>
          <button
            @click="payForAll"
            class="bg-resaltar flex justify-center rounded-lg px-2 py-4 my-5 font-bold"
          >
            Proceder con el pago
          </button>
          <div class="flex flex-row items-center justify-center">
            <span class="h-[0.5px] w-full bg-gray-300"></span>
            <span class="flex justify-center my-3 text-gray-300">o</span>
            <span class="h-[0.5px] w-full bg-gray-300"></span>
          </div>

          <a href="/" class="flex justify-center text-md text-gray-300">
            Continuar comprando
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
