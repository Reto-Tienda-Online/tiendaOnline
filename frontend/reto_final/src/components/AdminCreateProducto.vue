<template>
    <main class="flex flex-col text-white w-full h-screen">
        <nav class="flex justify-end my-4 mr-6">
            <div class="flex items-center">
                <font-awesome-icon icon="bell" class="w-6 h-6" />
            </div>
        </nav>
        <section class="w-full h-full flex flex-row justify-center items-center mt-4 bg-transparent">

            <form @submit.prevent="createProduct"
                class="flex flex-col w-3/6 text-black py-6 px-6 bg-gray-400 border-2 border-black rounded-lg">
                <h1 class="flex justify-center items-center py-2 text-xl italic">Nuevo Producto: {{ formNewProducto.producto
                }}</h1>
                <div class="w-full flex flex-row py-2">
                    <label class="w-full text-md font-bold px-2">
                        Nombre:
                        <input v-model="formNewProducto.producto"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </label>
                    <label class="w-full text-md font-bold px-2">
                        Plataforma:
                        <select v-model="formNewProducto.id_plataforma">
                            <option value="" disabled selected>Elegir plataforma</option>
                            <option v-for="plataforma in plataformas" :key="plataforma.id" :value="plataforma.id"
                                class="text-black">
                                {{ plataforma.plataforma }}
                            </option>
                        </select>
                    </label>
                </div>
                <div class="flex flex-row py-2">
                    <label class="w-1/3 text-md font-bold px-4">
                        Precio Unitario €:
                        <input v-model="formNewProducto.unitPrice"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </label>
                    <label class="w-1/3 text-md font-bold px-4">
                        Descuento (%):
                        <select v-model="formNewProducto.id_descuento" class="text-black">
                            <option value="" disabled selected>Elegir descuento</option>
                            <option v-for="descuento in descuentos" :key="descuento.id" :value="descuento.id"
                                class="text-black">
                                {{ descuento.descuento }}%
                            </option>
                        </select>
                    </label>
                </div>
                <label class="text-md font-bold px-2">
                    Ruta de Video:
                    <input type="file" @change="handleFileChange"
                        class="h-full py-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label class="text-md font-bold">
                    URL Youtube:
                    <input v-model="formNewProducto.iframetrailer"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label class="text-md font-bold">
                    Descripción:
                    <textarea v-model="formNewProducto.descripcion"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <button type="submit"
                    class="flex justify-center items-center py-2 px-4 rounded-md font-barlow font-bold bg-resaltar mx-auto mt-4 hover:-translate-y-1 hover:translate-x-1">
                    Crear Producto
                </button>
            </form>
            <div class="w-1/6 flex flex-col mx-4 ">
                <!-- Aquí puedes mostrar una vista previa del video o imagen si es necesario -->
            </div>
        </section>
    </main>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            formNewProducto: {
                producto: '',
                id_plataforma: '',
                precio_unitario: 0,
                id_descuento: '',
                descripcion: '',
                rutavideo: '',
                iframetrailer: '',
            },
            selectedFile: null,
            plataformas: [],
            descuentos: [],
        };
    },
    mounted() {
        this.getPlatforms();
        this.getDescuentos();
    },
    methods: {
        handleFileChange(event) {
            // Manejar el cambio de archivo y almacenar el archivo seleccionado
            this.selectedFile = event.target.files[0];
        },
        createProduct() {
            axios.post('/create_producto', this.formNewProducto)
                .then(response => {
                    console.log('Producto creado:', response.data);
                    // Subir el archivo de video o imagen
                    const formData = new FormData();
                    formData.append('file', this.selectedFile);
                    formData.append('id', response.data.id);
                    axios.post('/upload_video', formData)
                        .then(response => {
                            console.log('Video subido:', response.data);
                        })
                        .catch(error => {
                            console.error('Error al subir el video:', error);
                        });
                })
                .catch(error => {
                    console.error('Error al crear el producto:', error);
                    console.log(this.formNewProducto);
                });
        },
        async getPlatforms() {
            axios.get(`/all_plataformas`)
                .then(response => {
                    this.plataformas = response.data;
                })
                .catch(error => {
                    console.error('Error al obtener las plataformas:', error);
                });
        },
        async getDescuentos() {
            axios.get(`/all_descuentos`)
                .then(response => {
                    this.descuentos = response.data;
                    console.log(this.descuentos);
                })
                .catch(error => {
                    console.error('Error al obtener los descuentos:', error);
                });
        },
    },
};
</script>
  