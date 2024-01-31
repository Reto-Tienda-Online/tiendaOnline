<template>
    <main class="flex flex-col text-white w-full h-screen">
        <nav class="flex justify-end my-4 mr-6">
            <div class="flex items-center">
                <font-awesome-icon icon="bell" class="w-6 h-6" />
            </div>
        </nav>
        <section class="w-full h-full flex flex-row justify-center items-center  mt-4 bg-transparent">

            <form @submit.prevent="update_product"
                class="flex flex-col w-3/6 text-black py-6 px-6 bg-gray-400 border-2 border-black rounded-lg">
                <h1 class="flex justify-center items-center py-2 text-xl italic">{{ $route.params.name }}</h1>
                <div class="w-full flex flex-row py-2">
                    <label class="w-full text-md font-bold px-2">
                        Nombre:
                        <input type="text" v-model="productName_v"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </label>
                    <label class="w-full text-md font-bold">
                        Plataforma:
                        <input type="text" v-model="platform" disabled
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </label>
                </div>
                <div class="flex flex-row py-2">
                    <label class="w-1/3 text-md font-bold px-4">
                        Precio Unitario €:
                        <input type="text" v-model="unitPrice"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </label>
                </div>
                <label class="text-md font-bold px-2">
                    Ruta de Video:
                    <input type="file"
                        class="h-full py-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label class="text-md font-bold">
                    URL Youtube:
                    <input type="url" v-model="trailerIframe"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label class="text-md font-bold">
                    Descripción:
                    <textarea  v-model="description"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <button type="submit"
                    class="flex justify-center items-center py-2 px-4 rounded-md font-barlow font-bold bg-resaltar mx-auto mt-4 hover:-translate-y-1 hover:translate-x-1">
                    Actualizar
                </button>
            </form>
            <div class="w-1/6 flex flex-col mx-4 ">
                <iframe width="320" height="215" :src="trailerIframe" frameborder>
                </iframe>
                <video :src="`./public${videoPath}`" alt="Video Trailer" width="320" height="215"></video>

            </div>
        </section>
    </main>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import router from '../router/index.js';

const route = useRoute();
var productID = 0;

const productName_v = ref('');
const unitPrice = ref('');
//const discount = ref('');
const platform = ref('');
const videoPath = ref('');
const trailerIframe = ref('');
const description = ref('');


const formData = {
    producto: productName_v.value,
    precio_unitario: unitPrice.value,
    rutavideo: videoPath.value,
    iframetrailer: trailerIframe.value
};

onMounted(() => {
    // Fetch data based on the route parameter and set the values
    const productNameParam = route.params.name;
    fetchData(productNameParam);
});
async function fetchData(productName) {
    try {
        const response = await axios.get(`/search?producto=${productName}`);
        const product = response.data;

        productID = product[0].id;
        productName_v.value = product[0].producto;
        unitPrice.value = product[0].precio_unitario;
        platform.value = product[0].nombreplataforma;
        videoPath.value = product[0].rutavideo;
        trailerIframe.value = product[0].iframetrailer;
        description.value = product[0].descripcion;
        console.log(product);
        console.log(videoPath);

    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}
async function update_product(){
    
    console.log(productID);

    formData.producto = productName_v.value;
    formData.precio_unitario = unitPrice.value;
    formData.rutavideo = videoPath.value;
    formData.iframetrailer = trailerIframe.value;
    formData.descripcion = description.value;

    await axios.put(`/update_producto/${productID}`, formData).then(response => {
        router.push({ name: 'admin_productos' });
    }).catch(error => {
        console.error('Error al actualizar el usuario:', error);
    });

};
</script>

  