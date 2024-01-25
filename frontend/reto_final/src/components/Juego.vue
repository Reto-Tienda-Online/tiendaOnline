<script setup>
import { ref, reactive } from "vue";
import { FwbA, FwbButton, FwbTextarea } from "flowbite-vue";
import Navbar from "./Navbar.vue";

const message = ref("");
const sayHi = () => {
    console.log(message.value)
    console.log(juego)
}

const juego = reactive({
    id: 18,
    nombre: '',
    precio: 45.78,
    plataformaId: 1,
    iframeTrailer: '',
    descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit beatae quae eius esse deserunt distinctio nulla. Modi reiciendis eius optio necessitatibus culpa voluptatibus magnam enim odio alias, quam doloribus ab?',
})

//ARREGLAR METODO
const getImgURL = (id) => {
    const imgUrl = `@assets/jokin/${id}/1.webp`;
    console.log(imgUrl);
    return imgUrl;
}

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
        <h1 class="text-white text-left mt-5 text-4xl">Acerca del Juego</h1>
        <p class="text-white mt-5 mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit beatae quae eius esse deserunt distinctio nulla. Modi reiciendis eius optio necessitatibus culpa voluptatibus magnam enim odio alias, quam doloribus ab?</p>
        <p @click="console.log('Hello')" class="text-white hover:underline">Leer mas...</p>
        <div>
            
            <!--NOMBRE-->
            <!--PLATAFORMA-->
            <!--PRECIO--> 
            <!--ADD TO CART BTN-->   
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
          v-model="message" 
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
