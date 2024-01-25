<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { FwbA, FwbButton, FwbTextarea } from "flowbite-vue";
import Navbar from "./Navbar.vue";
import axios from 'axios'

const message = ref([]);
const comment = ref('')
const splitDescripcion = ref('')
const sayHi = () => {
    console.log(message.value)
    console.log(juego)
}

const juego = reactive({
    id: 18,
    nombre: 'God Of War',
    precio: 45.78,
    plataformaId: 'Steam',
    iframeTrailer: '',
    descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit beatae quae eius esse deserunt distinctio nulla. Modi reiciendis eius optio necessitatibus culpa voluptatibus magnam enim odio alias, quam doloribus ab?',
})

//ARREGLAR METODO
const getImgURL = (id) => {
    const imgUrl = `/imgs/${id}/2.webp`;
    console.log(imgUrl);
    return imgUrl;
}

const showMore = computed(() => {
  if(juego.descripcion.length > 200){
    return true
  }else{
    return false
  }
})



//RUTA IMAGEN ../assets/jokin/{id}/1.webp
//LONGITUD MAXIMA DE DESCRIPCION {200} a partir de esta debe aparecer leer más

</script>

<template>
<Navbar/>
<div class="mx-20">
  <div>
    <div>
      <!--Seccion de foto del juego-->
    </div>
    <div>
      <!--Al lado div que contiene NOMBRE, PLATAFORMA, PRECIO, AÑADIR CARRITO, -->
    </div>
  </div>
  <div class="grid grid-cols-9 gap-4 mb-10">
    <!--Debajo ACERCA DEL JUEGO-->
    <div class="col-span-3">
        <h1 class="text-white mt-5 text-4xl text-center">Acerca del Juego</h1>
        <p class="text-white mt-5 mb-5">
            {{  }}</p>
        <p 
          v-show="showMore"
          @click="console.log('Hello')" 
          class="text-white hover:underline cursor-pointer"
          >
          Leer mas...
          </p>
        <div class="bg-background p-2 mt-2 rounded-xl">
            <!--NOMBRE-->
            <h1 class="text-white text-center text-4xl mt-5">{{ juego.nombre }}</h1>
            <!--PLATAFORMA-->
            <div class="mt-2 flex flex-row justify-center align-middle">
              <h3 class="text-white text-center my-auto font-bold uppercase mr-2">Plataforma:</h3>
              <img src="../assets/logos/steam.png" alt="" class="w-10">
              <h3 class="text-white text-center my-auto ml-3"> {{ juego.plataformaId }}</h3>
            </div>
            <!--PRECIO-->
            <div class="text-white flex flex-row justify-center mt-2">
              <h3 class="text-center uppercase my-auto font-bold mr-2">Precio:</h3>
              <h3 class="text-center">{{ juego.precio }} €</h3>  
            </div> 
            <!--ADD TO CART BTN-->
            <button
              class="text-white font-black bg-resaltar p-2 mt-1 w-full rounded-lg"
            >
            <font-awesome-icon icon="shopping-cart"/>
            Add to cart  
            </button>
        </div>
    </div>
    <div class="col-span-6">
        <!--Imagen-->
        <picture>
            <img
              class="picture rounded-xl"
              :src="getImgURL(juego.id)"
              loading="lazy"
            />
        </picture>
    </div>
  </div>
  <div>
    <!--REVIEWS que se pueda comentar-->
    <div>
        <!--Colocar aqui el metodo al enviarse el comentario-->
      <form
        @submit.prevent="sayHi" 
      >
        <fwb-textarea
          v-model="comment" 
          :rows="3"
          custom
          label=""
          placeholder="Escribe un comentario..."
        >
          <template #footer>
            <div class="flex items-center justify-between">
             <!-- <fwb-button type="submit"> Post comment </fwb-button> -->
             <button type="submit">Enviar comentario</button>
            </div>
          </template>
        </fwb-textarea>
      </form>
    </div>
  </div>
</div>
</template>
