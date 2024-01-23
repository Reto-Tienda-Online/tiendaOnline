<script setup>
// VUE FUNCTIONS
import { ref, onMounted } from "vue";

// LOGOS PC
import steamLogo from "../assets/logos/steam.png"
import battleNet from "../assets/logos/battle.png"
import electronicArts from "../assets/logos/ea.png"
import epicGames from "../assets/logos/epic.png"
import microsoftStore from "../assets/logos/playstore.png"
import rockstar from "../assets/logos/rockstar.png"
import ubisoft from "../assets/logos/ubisoft.png"
import blizzard from "../assets/logos/blizzard.png"

// LOGOS XBOX
import xbox from "../assets/logos/xboxl.png"
import xboxLive from "../assets/logos/xboxlive.png"
import xboxSeries from "../assets/logos/xboxs.png"


// LOGOS PLAYSTATION
import playstation from "../assets/logos/ps.png"
import psPlus from "../assets/logos/psplus.png"
import psStore from "../assets/logos/psstore.png"

//LOGOS NINTENDO
import nintendo from "../assets/logos/switch.png"



// MODAL
import { FwbModal } from 'flowbite-vue'

const pcLogos = ref([
  {
    src: steamLogo,
    nombre: "Steam"
  },
  {
    src: ubisoft,
    nombre: "Ubisoft"
  },
  {
    src: electronicArts,
    nombre: "Electronic Arts"
  },
  {
    src: battleNet,
    nombre: "Battle .Net"
  },
  {
    src: rockstar,
    nombre: "Rockstar"
  },
  {
    src: microsoftStore,
    nombre: "Microsoft Store"
  },
  {
    src: epicGames,
    nombre: "Epic Games"
  },
])

const tarjetasPC = ref([
  {
    src: blizzard,
    nombre: "Blizzard"
  }
])


//Rutas XBOX
const xboxLogos = ref([
  {
    src: xbox,
    nombre: "Xbox One"
  },
  {
    src: xboxSeries,
    nombre: "Xbox Series"
  }
])

const tarjetasXB = ref([
  {
    src: xboxLive,
    nombre: "Xbox Live"
  }
])


//RUTAS PLAYSTATION
const psLogos = ref([
  {
    src: playstation,
    nombre: "PS4"
  },
  {
    src: playstation,
    nombre: "PS5"
  }
])

const tarjetasPS = ref([
  {
    src: psPlus,
    nombre: "Playstation Plus"
  },
  {
    src: psStore,
    nombre: "Playstation Store"
  }
])


// RUTAS SWITCH
const switchLogos = ref([
  {
    src: nintendo,
    nombre: "Nintendo Switch"
  },
])

const isModalPcVisible = ref(false)
const isModalPsVisible = ref(false)
const isModalXbVisible = ref(false)
const isModalSwVisible = ref(false)


//EVENTOS MODALES (ABRIR)
const toggleModalPC = () => {
  isModalPcVisible.value = true
}
const toggleModalPS = () => {
  isModalPsVisible.value = true
}
const toggleModalXB = () => {
  isModalXbVisible.value = true
}
const toggleModalSW = () => {
  isModalSwVisible.value = true
}



//EVENTOS MODALES CERRAR
const closeModalPC = () => {
  isModalPcVisible.value = false;
}
const closeModalPS = () => {
  isModalPsVisible.value = false;
}
const closeModalXB = () => {
  isModalXbVisible.value = false;
}
const closeModalSW = () => {
  isModalSwVisible.value = false;
}

onMounted(() => {

})

</script>

<template>
  <div class="">
    <div class="flex justify-between align-middle">
      <div class="flex flex-col justify-start">
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
                    <h1 class="uppercase">
                      Plataforma  
                    </h1>
                  </div>
                </template>
                <template #body>
                  <div class="consolas">
                    <ul class="grid grid-cols-3 gap-4">
                      <li v-for="(logo, index) in pcLogos" :key="index" class="flex flex-row align-middle justify-start">
                        <img :src="logo.src" alt="" class=" max-h-7 max-w-7">
                        <h1 class="text-black ml-5">{{ logo.nombre }}</h1>
                      </li>
                    </ul>
                  </div>
                </template>
                <template #footer>
                  <div class="tarjetas">
                    <ul>
                      <li v-for="(logo, index) in tarjetasPC" :key="index" class="flex flex-col align-middle justify-center">
                        <div class="">
                          <img :src="logo.src" :alt="logo.nombre" class="max-w-20 max-h-20">
                          <h1 class="text-black">{{ logo.nombre }}</h1>
                        </div>
                      </li>
                    </ul>
                  </div>
                </template>    
          </fwb-modal>
        </li>

        <li class="font-barlow hover:text-gray-200 cursor-pointer">
          <button @click="toggleModalPS" >
            Playstation
            <font-awesome-icon icon="chevron-down" />
          </button>
          <!--Modal PlayStation-->
          <fwb-modal v-if="isModalPsVisible" @close="closeModalPS">
                <template #header>
                  <div class="flex items-center text-lg text-black text-center">
                    <h1 class="uppercase">
                      Plataforma  
                    </h1>
                  </div>
                </template>
                <template #body>
                  <div class="consolas">
                    <ul class="grid grid-cols-3 gap-4">
                      <li v-for="(logo, index) in psLogos" :key="index" class="flex flex-row align-middle justify-start">
                        <img :src="logo.src" alt="" class=" max-h-7 max-w-7">
                        <h1 class="text-black ml-5">{{ logo.nombre }}</h1>
                      </li>
                    </ul>
                  </div>
                </template>
                <template #footer>
                  <div class="tarjetas">
                    <ul class="flex flex-row">
                      <li v-for="(logo, index) in tarjetasPS" :key="index" class="flex flex-row align-middle justify-center mr-4">
                        <div class="flex flex-row justify-center align-middle">
                          <img :src="logo.src" :alt="logo.nombre" class="max-w-10 max-h-10">
                          <h1 class="text-black text-center mt-2 ml-4">{{ logo.nombre }}</h1>
                        </div>
                      </li>
                    </ul>
                  </div>
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
                    <h1 class="uppercase">
                      Plataforma  
                    </h1>
                  </div>
                </template>
                <template #body>
                  <div class="consolas">
                    <ul class="grid grid-cols-3 gap-4">
                      <li v-for="(logo, index) in xboxLogos" :key="index" class="flex flex-row align-middle justify-start">
                        <img :src="logo.src" alt="" class=" max-h-7 max-w-7">
                        <h1 class="text-black ml-5">{{ logo.nombre }}</h1>
                      </li>
                    </ul>
                  </div>
                </template>
                <template #footer>
                  <div class="tarjetas">
                    <ul>
                      <li v-for="(logo, index) in tarjetasXB" :key="index" class="flex flex-col align-middle justify-center">
                        <div class="">
                          <img :src="logo.src" :alt="logo.nombre" class="max-w-20 max-h-20">
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
                    <h1 class="uppercase">
                      Plataforma  
                    </h1>
                  </div>
                </template>
                <template #body>
                  <div class="consolas">
                    <ul class="grid grid-cols-3 gap-4">
                      <li v-for="(logo, index) in switchLogos" :key="index" class="flex flex-row align-middle justify-start">
                        <img :src="logo.src" alt="" class=" max-h-7 max-w-7">
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
          <a href="/cesta"
            ><font-awesome-icon
              icon="shopping-cart"
              class="text-2xl hover:text-resaltar cursor-pointer transition-all duration-500 ease-in-out"
          /></a>
        </li>
        <li>
          <font-awesome-icon
            icon="user"
            class="text-2xl hover:text-resaltar cursor-pointer transition-all duration-500 ease-in-out"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
