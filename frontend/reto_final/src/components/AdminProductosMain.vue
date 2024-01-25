<script setup></script>

<template>
  <main class="flex flex-col text-white w-full h-full">
    <nav class="flex justify-end my-4 mr-6">
      <div class="relative flex items-center mx-3">
        <input type="text"
          class="border-2 border-resaltar bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none text-gray-700"
          placeholder="Buscar..." />
        <button class="absolute right-3 top-2 text-gray-500">
          <font-awesome-icon icon="magnifying-glass" />
        </button>
      </div>
      <div class="flex items-center">
        <font-awesome-icon icon="bell" class="w-6 h-6" />
      </div>
    </nav>
    <section class="flex flex-col w-full h-full mt-4 bg-transparent">
      <div class="flex flex-row">
        <h1 class="text-2xl font-bold mx-4">Lista de Productos</h1>
        <div class="flex justify-end flex-row ml-auto space-x-2 mx-4 items-center">
          <button class=" w-8 h-8 text-center rounded-full border-2 text-resaltar">
            <span class="flex justify-center items-center align-middle text-xl font-bold text-center">↑</span>
          </button>
          <button class="w-8 h-8 rounded-full border-2 text-resaltar">
            <span class="flex justify-center items-center align-middle text-xl font-bold text-center">↓</span>
          </button>
          <button class="text-lg rounded-md px-4 py-2 mx-8 bg-resaltar ">
            NUEVO PRODUCTO
          </button>
        </div>
      </div>
      <div>
        <!-- Tabla de productos -->
        <table class="w-full text-sm text-left mt-4 rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class=" border-b-2 text-xs text-white uppercase  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Nombre
              </th>
              <th scope="col" class="px-6 py-3">
                Descripción
              </th>
              <th scope="col" class="px-6 py-3">
                Precio(€)
              </th>
              <th scope="col" class="px-6 py-3">
                Descuento
              </th>
              <th scope="col" class="px-6 py-3">
                Plataforma
              </th>
              <th scope="col" class="px-6 py-3">
                Video
              </th>
              <th scope="col" class="px-6 py-3">
                Trailer
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="dark:bg-gray-800 text-white" v-for="product in products" :key="product.id">
              <th scope="row" class="flex items-center px-6 py-4 text-gray-100 whitespace-nowrap dark:text-white">
                <div class="font-normal text-gray-300">{{ product.producto }}</div>
              </th>
              <td class="px-6 py-4">
                <div class="font-normal text-gray-300 text-pretty">{{ product.descripcion }}</div>
              </td>
              <td class="px-6 py-4">
                <div class="font-normal text-gray-300 text-pretty">{{ product.precio_unitario }}</div>
              </td>
              <td class="px-6 py-4">
                <div class="font-normal text-gray-300 text-pretty">{{ product.descuento.descuento }}</div>
              </td>
              <td class="px-6 py-4">
                <div class="font-normal text-gray-300 text-pretty">{{ product.plataforma.plataforma }}</div>
              </td>
              <td class="px-6 py-4">

                <div class="flex items-center justify-center w-full">
                  <label for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to
                          upload</span> or drag and drop</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>

              </td>
              <td class="px-6 py-4">

                <div class="flex items-center justify-center w-full">
                  <label for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to
                          upload</span> or drag and drop</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </td>
              <td class="justify-center px-6 py-4">
                <a href="#" class="font-medium mx-1 text-blue-600 dark:text-blue-500 ">
                  <font-awesome-icon icon="pen-to-square" class="w-6 h-6 hover:-translate-y-2" />
                </a>
                <a href="" class="font-medium mx-1 text-red-600 dark:text-blue-500">
                  <font-awesome-icon icon="trash" class="w-6 h-6 hover:-translate-y-2" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://192.168.1.75/all_productos');
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
};
</script>