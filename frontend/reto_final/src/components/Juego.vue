<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import Navbar from "./Navbar.vue";
import axios from 'axios'
import { useStore } from 'vuex';
import { useRouter } from "vue-router";
import { API_URL } from "../config";

const router = useRouter()
const store = useStore();
const juegoPasado = ref({})
const comment = reactive({
  resena: 'Reseña para usuario Diego',
  id_usuario: 9,
  contenido: '',
  id_juego: 1,
  valoracion: 5,
})

const splitDescripcion = ref('')
const showAllDesc = ref(false)
const sayHi = () => {
  /*{
  "resena": "Review for john.doe@example.com",
  "id_usuario": 3,
  "contenido": "Content for john.doe@example.com",
  "id_juego": 1,
  "valoracion": 4
} */
  let data = JSON.stringify(comment);
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://85.50.79.98:8080/resenas/',
    headers: {
      'Content-Type': 'application/json'
    },
    data : data
  };
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
  // console.log(comment.value)
  // console.log(juego)
}

//ARREGLAR METODO
const getImgURL = (id) => {
  const imgUrl = `/imgs/juegos/${id}/2.webp`;
  // console.log(imgUrl);
  return imgUrl;
}

const getLogoURL = (nombreLogo) => {
  return `/imgs/logos/${nombreLogo}.png`
}

const showMore = computed(() => {
  splitDescripcion.value = juegoPasado.value.descripcion

  if(splitDescripcion.value){
    if(splitDescripcion.value.length >= 200){
      splitDescripcion.value = splitDescripcion.value.slice(0,200)
      splitDescripcion.value = splitDescripcion.value.slice(0, splitDescripcion.value.lastIndexOf(" "))
      return true
    }else{
      return false
    }
  }
})

const showMoreText = () => {
  showAllDesc.value = !showAllDesc.value
}

const sendCartData = (data) => {
  const id_user = JSON.parse(localStorage.getItem('usuario')).id
  
  // console.log(id_user)
const juegoAñadir = JSON.stringify({
  id_usuario: id_user,
  id_producto: data.id,
});

// console.log(juegoAñadir)
const config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://85.50.79.98:8080/carrocompra',
  headers: {
    'Content-Type': 'application/json',
  },
  data : juegoAñadir
};
axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
}

const addItemToCart = (item) => {

  try{
    //COMPARTO ENTRE COMPONENTES
    store.commit('setShopItems', item)

    //AÑADO AL LOCAL STORAGE PARA QUE NO SE PIERDA LA SESION Y NO TENGA QUE CARGARLO DESDE LA BD
    localStorage.setItem('shopcart', JSON.stringify(store.state.shopCart))

    //HAGO UN POST A LA API
    sendCartData(item)
    // console.log(store.state.shopCart)

    alert(`El juego ${item.producto} se ha añadido al carrito`)

    router.push('/cesta')
    
  }catch(error){
    console.error(error)
  }

};




onMounted(() => {
  if (store.state.juegoDetalle) {
    // console.log(store.state.datosCompartidos)
    juegoPasado.value = store.state.juegoDetalle;
    // console.log(juegoPasado.value)
  }

})



//RUTA IMAGEN ../assets/jokin/{id}/1.webp
//LONGITUD MAXIMA DE DESCRIPCION {200} a partir de esta debe aparecer leer más

// descripcion: "Descripción de Half Life"
// id: 4
// id_descuento: 4
// id_plataforma: 4
// iframetrailer: "https://www.youtube.com/watch?v=O2W0N3uKXmo"
// precio_unitario: "19.99"
// producto: "Half Life"
// rutavideo: "/imgs/4/1.webm"
</script>

<template>
  <Navbar />
  <div class="mx-20">
    <div>
      <div>
        <!--Seccion de foto del juego-->
      </div>
      <div>
        <!--Al lado div que contiene NOMBRE, PLATAFORMA, PRECIO, AÑADIR CARRITO, -->
      </div>
    </div>

    <div class="grid grid-cols-9 gap-4 mb-1">
      <!--Debajo ACERCA DEL JUEGO-->
      <div class="col-span-6">
        <!--Imagen-->
        <picture>
          <img class="picture rounded-xl h-full" :src="getImgURL(juegoPasado.id)" loading="lazy" />
        </picture>
      </div>
      <div class="col-span-3 flex flex-col  justify-between bg-background rounded-xl">
        <div class="flex flex-col p-2">
          <h1 class="text-white mt-5 text-4xl text-center">Acerca del Juego</h1>
          <p class="text-white mt-5 mb-5 text-center">
            {{ showAllDesc === true ? juegoPasado.descripcion : splitDescripcion }}</p> <!--Descripcion cortada-->
          <p v-show="showMore" @click="showMoreText"
            class="text-white hover:underline cursor-pointer text-center">
            Leer mas...
          </p>
        </div>
        <div class="bg-background p-2 mt-2 rounded-xl">
          <!--NOMBRE-->
          <h1 class="text-white text-center text-4xl mt-5">{{ juegoPasado.producto }}</h1>
          <!--PLATAFORMA-->
          <div class="mt-2 flex flex-row justify-center align-middle">
            <h3 class="text-white text-center my-auto font-bold uppercase mr-2">Plataforma:</h3>
            <img :src=getLogoURL(juegoPasado.nombreplataforma) alt="" class="w-10">
            <h3 class="text-white text-center my-auto ml-3"> {{ juegoPasado.nombreplataforma }}</h3>
          </div>
          <!--PRECIO-->
          <div class="text-white flex flex-row justify-center mt-2">
            <h3 class="text-center uppercase my-auto font-bold mr-2">Precio:</h3>
            <h3 class="text-center">{{ juegoPasado.precio_unitario }} €</h3>
          </div>
          <!--ADD TO CART BTN-->
          <button 
            class="text-white font-black bg-resaltar p-2 mt-1 w-full rounded-lg"
            @click="addItemToCart(juegoPasado)"
            >
            <font-awesome-icon icon="shopping-cart" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
    <div>
      <!--REVIEWS que se pueda comentar-->
      <div class="mt-5">
        <!--Colocar aqui el metodo al enviarse el comentario-->
        <form @submit.prevent="sayHi">
          <div class="flex flex-row gap-2 bg-background rounded-xl">
            <textarea
              v-model="comment.contenido"
              rows="5"
              class="w-full m-5 rounded-xl" 
              placeholder="Escribe tu comentario..."></textarea>
            <button
              class="text-white bg-resaltar m-10 rounded-xl"
            >
            Enviar comentario</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
