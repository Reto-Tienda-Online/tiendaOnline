<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import Navbar from "./Navbar.vue";
import Comentario from "./Comentario.vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const juegoPasado = ref({});
const listaCompra = ref([]);
const comment = reactive({
  resena: "",
  id_usuario: null,
  contenido: "",
  id_juego: null,
  valoracion: 5,
});
const listaComentarios = ref([]);
const productsPerPage = ref(3);
const init = ref(0);
const end = ref(3);
const currentPage = ref(1);
const totalPages = ref(0);

const splitDescripcion = ref("");
const showAllDesc = ref(false);
const sendComment = () => {
  const id_user = JSON.parse(localStorage.getItem("usuario"))?.id;
  if (id_user !== undefined) {
    comment.id_usuario = id_user;
  } else {
    router.push("/login");
  }

  comment.id_juego = juegoPasado.value.id;
  let data = JSON.stringify(comment);
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://85.50.79.98:8080/resenas/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      comment.resena = "";
      comment.contenido = "";
      alert("Comentario enviado con éxito");
    })
    .catch((error) => {
      console.log(error);
    });
  // console.log(comment.value)
  // console.log(juego)
};

//ARREGLAR METODO
const getImgURL = (id) => {
  const imgUrl = `/imgs/juegos/${id}/2.webp`;
  // console.log(imgUrl);
  return imgUrl;
};

const getLogoURL = (nombreLogo) => {
  return `/imgs/logos/${nombreLogo}.png`;
};

const showMore = computed(() => {
  splitDescripcion.value = juegoPasado.value.descripcion;

  if (splitDescripcion.value) {
    if (splitDescripcion.value.length >= 200) {
      splitDescripcion.value = splitDescripcion.value.slice(0, 200);
      splitDescripcion.value = splitDescripcion.value.slice(
        0,
        splitDescripcion.value.lastIndexOf(" ")
      );
      return true;
    } else {
      return false;
    }
  }
});

const showMoreText = () => {
  showAllDesc.value = !showAllDesc.value;
};

const sendCartData = (data) => {
  const id_user = JSON.parse(localStorage.getItem("usuario")).id;

  // console.log(id_user)
  const juegoAñadir = JSON.stringify({
    id_usuario: id_user,
    id_producto: data.id,
  });

  // console.log(juegoAñadir)
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://85.50.79.98:8080/carrocompra",
    headers: {
      "Content-Type": "application/json",
    },
    data: juegoAñadir,
  };
  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const addItemToCart = (item) => {
  //PARA ISSAM
  if (!isInShopcart(item)) {
    //Verificamos si el usuario esta logueado
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

    if (isLoggedIn) {
      try {
        //COMPARTO ENTRE COMPONENTES
        store.commit("setShopItems", item);

        //AÑADO AL LOCAL STORAGE PARA QUE NO SE PIERDA LA SESION Y NO TENGA QUE CARGARLO DESDE LA BD
        localStorage.setItem("shopcart", JSON.stringify(store.state.shopCart));

        //HAGO UN POST A LA API
        sendCartData(item);
        // console.log(store.state.shopCart)

        alert(`El juego ${item.producto} se ha añadido al carrito`);

        router.push("/cesta");
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Es necesario iniciar sesión");
      router.push("/login");
    }
  } else {
    alert("Ya está en el carrito");
  }
};

const isInShopcart = (juego) => {
  //BD
  let isInShop = false;
  if (listaCompra.value.length > 0) {
    for (const item of listaCompra.value) {
      if (item["producto"].id === juego.id) {
        isInShop = true;
        break;
      } else {
        isInShop = false;
      }
    }
  }

  return isInShop;

}

const addToWishList = async (producto_id) => {
  const data = {
    id_usuario: JSON.parse(localStorage.getItem('usuario')).id,
    id_producto: producto_id
  };

  try {
    const response = await axios.post(`listadeseo`, data);
    console.log(response.data);
    console.log("Añadido a favoritos");
  } catch (error) {
    console.error(error);
  }
};



const getComentarios = () => {
  const path = `http://85.50.79.98:8080/resena/${juegoPasado.value.id}`;
  axios
    .get(path)
    .then((response) => {
      listaComentarios.value = response.data;
      console.log(listaComentarios.value);
    })
    .catch((error) => {
      console.error(error);
    });
};

const prevPage = () => {
  init.value -= 3;
  end.value -= 3;
  currentPage.value--;
};

const nextPage = () => {
  init.value += 3;
  end.value += 3;
  currentPage.value++;
  console.log(currentPage.value);
};

onMounted(() => {
  if (store.state.juegoDetalle) {
    // console.log(store.state.datosCompartidos)
    juegoPasado.value = store.state.juegoDetalle;
    // console.log(juegoPasado.value)
  }

  if (Object.keys(juegoPasado.value).length === 0) {
    juegoPasado.value = JSON.parse(localStorage.getItem("juegoDetalle"));
  }

  const idUser = JSON.parse(localStorage.getItem("usuario"))?.id;
  if (idUser !== undefined) {
    const path = `http://85.50.79.98:8080/carrocompra?id_usuario=${idUser}`;
    comment.id_usuario = idUser;
    axios
      .get(path)
      .then((response) => {
        listaCompra.value = response.data;
        // console.log(listaCompra.value)
      })
      .catch((error) => {
        console.error(error);
      });
  }
  getComentarios();
  totalPages.value = Math.ceil(
    listaComentarios.value.length / productsPerPage.value
  );
});

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
          <img
            class="picture rounded-xl h-full"
            :src="getImgURL(juegoPasado.id)"
            loading="lazy"
          />
        </picture>
      </div>
      <div
        class="col-span-3 flex flex-col justify-between bg-background rounded-xl"
      >
        <div class="flex flex-col p-2">
          <h1 class="text-white mt-5 text-4xl text-center">Acerca del Juego</h1>
          <p class="text-white mt-5 mb-5 text-center">
            {{
              showAllDesc === true ? juegoPasado.descripcion : splitDescripcion
            }}
          </p>
          <!--Descripcion cortada-->
          <p
            v-show="showMore"
            @click="showMoreText"
            class="text-white hover:underline cursor-pointer text-center"
          >
            Leer mas...
          </p>
        </div>
        <div class="bg-background p-2 mt-2 rounded-xl">
          <!--NOMBRE-->
          <h1 class="text-white text-center text-4xl mt-5">
            {{ juegoPasado.producto }}
          </h1>
          <!--PLATAFORMA-->
          <div class="mt-2 flex flex-row justify-center align-middle">
            <h3 class="text-white text-center my-auto font-bold uppercase mr-2">
              Plataforma:
            </h3>
            <img
              :src="getLogoURL(juegoPasado.nombreplataforma)"
              alt=""
              class="w-10"
            />
            <h3 class="text-white text-center my-auto ml-3">
              {{ juegoPasado.nombreplataforma }}
            </h3>
          </div>
          <!--PRECIO-->
          <div class="text-white flex flex-row justify-center mt-2">
            <h3 class="text-center uppercase my-auto font-bold mr-2">
              Precio:
            </h3>
            <h3 class="text-center">{{ juegoPasado.precio_unitario }} €</h3>
          </div>
          <!--ADD TO CART BTN-->
          <div class="flex flex-row justify-center align-middle">
            <button
              class="text-white font-black bg-resaltar p-2 mt-1 w-full rounded-lg"
              @click="addItemToCart(juegoPasado)"
            >
              <font-awesome-icon icon="shopping-cart" />
              Add to cart
            </button>
            <button
              @click="addToWishList(juegoPasado.id)"
              class="text-white text-2xl ml-3 mr-3 rounded-xl"
            >
              <font-awesome-icon icon="heart" :class="{'text-red-600': !juegoPasado.favorito}"/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <!--REVIEWS que se pueda comentar-->
      <div class="mt-5 bg-background rounded-xl mb-2">
        <!--Colocar aqui el metodo al enviarse el comentario-->
        <form @submit.prevent="sendComment">
          <div class="flex flex-row">
            <input
              required
              class="mx-5 mt-5 w-1/2 text-xl rounded-lg"
              type="text"
              placeholder="Titulo de la reseña..."
              v-model="comment.resena"
            />
            <div>
              <label class="text-xl rounded-lg text-white font-black">
                VALORACIÓN</label
              >
              <input
                required
                class="mx-5 mt-5 text-xl rounded-lg"
                type="number"
                placeholder="⭐"
                min="1"
                max="5"
                v-model="comment.valoracion"
              />
            </div>
          </div>
          <div class="flex flex-row gap-2 rounded-xl">
            <textarea
              required
              v-model="comment.contenido"
              rows="5"
              class="w-full m-5 rounded-xl"
              placeholder="Escribe tu comentario..."
            ></textarea>
            <button class="text-white bg-resaltar m-10 rounded-xl">
              Enviar comentario
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div v-show="listaComentarios.length > 0" class="flex flex-col mt-10 mx-20">
    <!--PAGINATION-->
    <div class="flex flex-row justify-center gap-5">
      <h1 v-show="init !== 0" 
      class="text-white flex items-center justify-center uppercase font-bold">Anterior</h1>
      <button
        v-show="init !== 0"
        class="text-white bg-red-500 rounded-full p-5 w-10 h-10 flex items-center justify-center"
        @click="prevPage"
      >
        <font-awesome-icon icon="chevron-left" />
      </button>

      <button
        v-show="
          currentPage < Math.ceil(listaComentarios.length / productsPerPage)
        "
        class="text-white bg-resaltar rounded-full p-5 w-10 h-10 flex items-center justify-center"
        @click="nextPage"
      >
        <font-awesome-icon icon="chevron-right" />
      </button>
      <h1
        v-show="
          currentPage < Math.ceil(listaComentarios.length / productsPerPage)
        "
        class="text-white flex items-center justify-center uppercase font-bold"
      >
        Siguiente
      </h1>
    </div>
    <h1 class="text-gray-200 text-4xl font-barlow">
      Comentarios
      <font-awesome-icon icon="chevron-right" />
    </h1>
    <div class="grid grid-cols-3 gap-10">
      <Comentario
        v-for="(comment, index) in listaComentarios.slice(init, end)"
        :key="index"
        :comentario="comment"
      />
    </div>
  </div>
</template>
