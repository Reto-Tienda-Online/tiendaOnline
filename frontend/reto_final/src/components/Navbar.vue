<script setup>
// VUE FUNCTIONS
import { ref, onMounted } from "vue";

import { useRouter } from "vue-router"; // Import useRouter from Vue Router
import { useStore } from "vuex";

// LOGOS PC
import steamLogo from "/imgs/logos/Steam.png";
import battleNet from "/imgs/logos/Battle Net.png";
import electronicArts from "/imgs/logos/Origin.png";
import epicGames from "/imgs/logos/Epic Games Store.png";

import ubisoft from "/imgs/logos/Ubisoft Connect.png";
import blizzard from "/imgs/logos/blizzard.png";

// LOGOS XBOX
import xboxSeries from "/imgs/logos/Xbox Store.png"; 
import xboxLive from "/imgs/logos/xboxlive.png";

// LOGOS PLAYSTATION
import playstation from "/imgs/logos/PlayStation Store.png";
import psPlus from "/imgs/logos/PlayStation Now.png";

//LOGOS NINTENDO
import nintendo from "/imgs/logos/Nintendo eShop.png";

// MODAL
import { FwbModal } from "flowbite-vue";

//SESSION MANAGEMENT CONSTANTS
const isLoggedIn = ref(false); // Default value is false, indicating user is not logged in
const usuario = ref({ nombre: "" }); // Initialize usuario object
const $router = useRouter(); // Access Vue Router
const store = useStore()

const pcLogos = ref([
  {
    src: steamLogo,
    nombre: "Steam",
  },
  {
    src: ubisoft,
    nombre: "Ubisoft Connect",
  },
  {
    src: electronicArts,
    nombre: "Origin",
  },
  {
    src: battleNet,
    nombre: "Battle Net",
  },
  {
    src: epicGames,
    nombre: "Epic Games Store",
  },
]);

const tarjetasPC = ref([
  {
    src: blizzard,
    nombre: "Blizzard",
  },
]);

//Rutas XBOX
const xboxLogos = ref([
  {
    src: xboxSeries,
    nombre: "Xbox Store",
  },
]);

const tarjetasXB = ref([
  {
    src: xboxLive,
    nombre: "Xbox Live",
  },
]);

//RUTAS PLAYSTATION
const psLogos = ref([
  {
    
    src: psPlus,
    nombre: "Playstation Now",
  },
  {
    src: playstation,
    nombre: "Playstation Store",
  },
]);

// RUTAS SWITCH
const switchLogos = ref([
  {
    src: nintendo,
    nombre: "Nintendo eShop",
  },
]);

const showUserCard = ref(false);
const isModalPcVisible = ref(false);
const isModalPsVisible = ref(false);
const isModalXbVisible = ref(false);
const isModalSwVisible = ref(false);

//EVENTOS MODALES (ABRIR)
const toggleModalPC = () => {
  isModalPcVisible.value = true;
};
const toggleModalPS = () => {
  isModalPsVisible.value = true;
};
const toggleModalXB = () => {
  isModalXbVisible.value = true;
};
const toggleModalSW = () => {
  isModalSwVisible.value = true;
};

//EVENTOS MODALES CERRAR
const closeModalPC = () => {
  isModalPcVisible.value = false;
};
const closeModalPS = () => {
  isModalPsVisible.value = false;
};
const closeModalXB = () => {
  isModalXbVisible.value = false;
};
const closeModalSW = () => {
  isModalSwVisible.value = false;
};
const toggleUserCard = () => {
  showUserCard.value = !showUserCard.value;
};

//SESSION MANAGEMENT
const handleLogout = () => {
  // Clear user data and authentication status from localStorage
  localStorage.removeItem("usuario");
  localStorage.removeItem("isLoggedIn");

  // Update isLoggedIn variable to false
  isLoggedIn.value = false;

  // Redirect to the home page
  $router.push("/");
};

const goHome = () => {
  $router.push("/");
};

const redirect = (nombrePlataforma) => {
  store.commit('setPlataformData', nombrePlataforma)
  $router.push('/categoriaDetalle')
}
onMounted(() => {
  // Check if the user is logged in based on localStorage
  const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

  const usuarioData = JSON.parse(localStorage.getItem("usuario"));
  const isAdminUser = usuarioData ? usuarioData.admin : false;

  if (storedIsLoggedIn === "true" && !isAdminUser) {
    isLoggedIn.value = true;
    usuario.value = JSON.parse(localStorage.getItem("usuario"));
  }
});
</script>

<template>
  <nav>
    <div class="flex justify-between align-middle">
      <div
        class="flex flex-col justify-start hover:cursor-pointer"
        @click="goHome"
      >
        <img
          class="mt-2 ml-5 w-24 h-24"
          src="../img/icono-white.svg"
          alt="Logotipo"
        />
      </div>
      <ul
        class="mt-5 flex flex-row justify-center align-middle space-x-5 text-gray-200 font-bold font-barlow"
      >
        <!--Añadir button a cada font para sacar dialogo de las pc que contiene -->
        <li class="font-barlow hover:text-gray-200 cursor-pointer">
          <button @click="toggleModalPC">
            PC
            <font-awesome-icon icon="chevron-down" />
          </button>
          <!--Modal PC-->
          <fwb-modal v-if="isModalPcVisible" @close="closeModalPC">
            <template #header>
              <div class="flex items-center text-lg text-black text-center">
                <h1 class="uppercase">Plataforma</h1>
              </div>
            </template>
            <template #body>
              <div class="consolas">
                <ul class="grid grid-cols-3 gap-4">
                  <li
                    v-for="(logo, index) in pcLogos"
                    :key="index"
                    class="flex flex-row align-middle justify-start hover:scale-110 transition-all duration-300"
                    @click="redirect(logo.nombre)"
                  >
                    <img :src="logo.src" alt="" class="max-h-7 max-w-7" />
                    <h1 class="text-black ml-5">{{ logo.nombre }}</h1>
                  </li>
                </ul>
              </div>
            </template>
            <template #footer>
              <div class="tarjetas">
                <ul>
                  <li
                    v-for="(logo, index) in tarjetasPC"
                    :key="index"
                    class="max-w-20 flex flex-col align-middle justify-center hover:scale-110 transition-all duration-300"
                  >
                    <div class="">
                      <img
                        :src="logo.src"
                        :alt="logo.nombre"
                        class="max-w-20 max-h-20"
                      />
                      <h1 class="text-black">{{ logo.nombre }}</h1>
                    </div>
                  </li>
                </ul>
              </div>
            </template>
          </fwb-modal>
        </li>

        <li class="font-barlow hover:text-gray-200 cursor-pointer">
          <button @click="toggleModalPS">
            Playstation
            <font-awesome-icon icon="chevron-down" />
          </button>
          <!--Modal PlayStation-->
          <fwb-modal v-if="isModalPsVisible" @close="closeModalPS">
            <template #header>
              <div class="flex items-center text-lg text-black text-center">
                <h1 class="uppercase">Plataforma</h1>
              </div>
            </template>
            <template #body>
              <div class="consolas">
                <ul class="grid grid-cols-3 gap-4">
                  <li
                    v-for="(logo, index) in psLogos"
                    :key="index"
                    class="flex flex-row align-middle justify-start hover:scale-110 transition-all duration-300"
                    @click="redirect(logo.nombre)"
                  >
                    <img :src="logo.src" alt="" class="max-h-7 max-w-7" />
                    <h1 class="text-black ml-5">{{ logo.nombre }}</h1>
                  </li>
                </ul>
              </div>
            </template>
            <template #footer>
              
            </template>
          </fwb-modal>
        </li>

        <li class="font-barlow hover:text-gray-200 cursor-pointer">
          <button @click="toggleModalXB">
            Xbox
            <font-awesome-icon icon="chevron-down" />
          </button>
          <!--Modal XBox-->
          <fwb-modal v-if="isModalXbVisible" @close="closeModalXB">
            <template #header>
              <div class="flex items-center text-lg text-black text-center">
                <h1 class="uppercase">Plataforma</h1>
              </div>
            </template>
            <template #body>
              <div class="consolas">
                <ul class="grid grid-cols-3 gap-4">
                  <li
                    v-for="(logo, index) in xboxLogos"
                    :key="index"
                    class="flex flex-row align-middle justify-start hover:scale-110 transition-all duration-300"
                    @click="redirect(logo.nombre)"
                  >
                    <img :src="logo.src" alt="" class="max-h-7 max-w-7" />
                    <h1 class="text-black ml-5">{{ logo.nombre }}</h1>
                  </li>
                </ul>
              </div>
            </template>
            <template #footer>
              <div class="tarjetas">
                <ul>
                  <li
                    v-for="(logo, index) in tarjetasXB"
                    :key="index"
                    class="max-w-20 flex flex-col align-middle justify-center hover:scale-110 transition-all duration-300"
                  >
                    <div class="">
                      <img
                        :src="logo.src"
                        :alt="logo.nombre"
                        class="max-w-20 max-h-20"
                      />
                      <h1 class="text-black">{{ logo.nombre }}</h1>
                    </div>
                  </li>
                </ul>
              </div>
            </template>
          </fwb-modal>
        </li>

        <li class="font-barlow hover:text-gray-200 cursor-pointer">
          <button @click="toggleModalSW">
            Nintendo
            <font-awesome-icon icon="chevron-down" />
          </button>
          <!--Modal Nintendo-->
          <fwb-modal v-if="isModalSwVisible" @close="closeModalSW">
            <template #header>
              <div class="flex items-center text-lg text-black text-center">
                <h1 class="uppercase">Plataforma</h1>
              </div>
            </template>
            <template #body>
              <div class="consolas">
                <ul class="grid grid-cols-3 gap-4">
                  <li
                    v-for="(logo, index) in switchLogos"
                    :key="index"
                    class="flex flex-row align-middle justify-start hover:scale-110 transition-all duration-300"
                    @click="redirect(logo.nombre)"
                  >
                    <img :src="logo.src" alt="" class="max-h-7 max-w-7" />
                    <h1 class="text-black ml-5">{{ logo.nombre }}</h1>
                  </li>
                </ul>
              </div>
            </template>
            <template #footer>
              <!--Agregar algo en cualquier caso-->
            </template>
          </fwb-modal>
        </li>
      </ul>
      <ul class="flex flex-row text-gray-200 mt-5 mr-5 space-x-7">
        <!--Agregar respectivos buttons para inicio de sesion y carro de compras-->
        <li>
          <router-link to="/cesta"
            ><font-awesome-icon
              icon="shopping-cart"
              class="text-2xl hover:text-resaltar cursor-pointer transition-all duration-500 ease-in-out"
          /></router-link>
        </li>
        <!--Lista de Fovoritos del Usuario-->
        <li>
          <a href="/favoritos">
            <font-awesome-icon
              icon="heart"
              class="text-2xl hover:text-resaltar cursor-pointer transition-all duration-500 ease-in-out"
          /></a>
        </li>
        <!-- Usuario-->
        <li class="font-barlow hover:text-gray-200 cursor-pointer">
          <!-- Check if the user is logged in -->
          <template v-if="isLoggedIn">
            <div class="group">
              <font-awesome-icon
                icon="user"
                class="text-2xl hover:text-resaltar cursor-pointer transition-all duration-500 ease-in-out"
                @click="toggleUserCard"
              />
              <!-- User Card -->
              <div
                v-if="showUserCard"
                class="absolute top-11 right-4 mt-2 bg-white rounded-lg shadow-md p-2 text-center"
              >
                <!-- User Name -->
                <p class="font-bold font-barlow text-gray-800 mb-0">
                  {{ usuario.nombre }}
                </p>
                <!-- Logout Button -->
                <button
                  @click="handleLogout"
                  class="text-resaltar hover:underline"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </template>
          <template v-else>
            <!-- If not logged in, show login button -->
            <router-link to="/login">
              <font-awesome-icon
                icon="user"
                class="text-2xl hover:text-resaltar cursor-pointer transition-all duration-500 ease-in-out"
              />
            </router-link>
          </template>
        </li>
      </ul>
    </div>
  </nav>
</template>
