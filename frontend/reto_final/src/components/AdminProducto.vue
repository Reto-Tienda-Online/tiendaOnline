<template>
    <main class="flex flex-col text-white w-full h-screen">
        <nav class="flex justify-end my-4 mr-6">
            <div class="flex items-center">
                <font-awesome-icon icon="bell" class="w-6 h-6" />
            </div>
        </nav>
        <section class="w-full h-full flex flex-row justify-center items-center  mt-4 bg-transparent">

            <form class="flex flex-col w-3/6 text-black py-6 px-6 bg-gray-400 border-2 border-black rounded-lg">
                <h1 class="flex justify-center items-center py-2 text-xl italic">{{ $route.params.name }}</h1>
                <div class="w-full flex flex-row py-2">
                    <label class="w-full text-md font-bold px-2">
                        Nombre:
                        <input type="text" v-model="productName"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </label>
                    <label class="w-full text-md font-bold">
                        Plataforma:
                        <input type="text" v-model="platform"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </label>
                </div>
                <div class="flex flex-row py-2">
                    <label class="w-1/3 text-md font-bold px-4">
                        Precio Unitario €:
                        <input type="text" v-model="unitPrice"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </label>
                    <label class="w-1/3 text-md font-bold">
                        Descuento %:
                        <input type="text" v-model="discount"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </label>
                </div>
                <label class="text-md font-bold px-2">
                    Ruta de Video:
                    <input type="file" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label class="text-md font-bold">
                    URL Youtube:
                    <input type="url" v-model="trailerIframe"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <button type="submit"
                    class="flex justify-center items-center py-2 px-4 rounded-md font-barlow font-bold bg-resaltar mx-auto mt-4 hover:-translate-y-1 hover:translate-x-1">
                    Actualizar
                </button>
            </form>
            <div class="w-1/6 flex flex-col mx-4 ">
                <iframe width="320" height="215" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                <video src="#" alt="Video Trailer">
                    <source>
                </video>
            </div>
        </section>
    </main>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { API_URL } from '@src/config.js';
import axios from 'axios';

const productName = ref(''); // Replace with the actual parameter name
const unitPrice = ref('');
const discount = ref('');
const platform = ref('');
const videoPath = ref('');
const trailerIframe = ref('');
/*
onMounted(() => {
  // Fetch data based on the route parameter and set the values
  const productId = $route.params.id; // Replace with the actual parameter name
  fetchData(productId);
});
 
async function fetchData(productId) {
  try {
    const response = await axios.get(`${API_URL}/producto/${productId}`);
    const product = response.data;
 
    productName.value = route.params.name;
    unitPrice.value = product.precio_unitario;
    discount.value = product.id_descuento;
    platform.value = product.id_plataforma;
    videoPath.value = product.rutavideo;
    trailerIframe.value = product.iframetrailer;
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
}
*/
</script>
  