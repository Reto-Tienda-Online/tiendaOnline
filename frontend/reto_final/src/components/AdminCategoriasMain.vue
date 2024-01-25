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
        <h1 class="text-2xl font-bold mx-4">Lista de Categorias</h1>
        <div class="flex justify-end flex-row ml-auto space-x-2 mx-4 items-center">
          <button class=" w-8 h-8 text-center rounded-full border-2 text-resaltar">
            <span class="flex justify-center items-center align-middle text-xl font-bold text-center">↑</span>
          </button>
          <button class="w-8 h-8 rounded-full border-2 text-resaltar">
            <span class="flex justify-center items-center align-middle text-xl font-bold text-center">↓</span>
          </button>
          <button class="text-lg rounded-md px-4 py-2 mx-8 bg-resaltar ">
            NUEVO CATEGORIA
          </button>
        </div>
      </div>
      <div>

        <!-- Tabla de categorias -->
        <table class="w-full text-sm text-left mt-4 rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class=" border-b-2 text-xs text-white uppercase  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Categoría
              </th>
              <th scope="col" class="px-6 py-3">
                Descripción
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="dark:bg-gray-800 text-white" v-for="category in categories" :key="category.id">
              <th scope="row" class="flex items-center px-6 py-4 text-gray-100 whitespace-nowrap dark:text-white">
                <div class="font-normal text-gray-300">{{ category.categoria }}</div>

              </th>
              <td class="px-6 py-4">
                <div class="font-normal text-gray-300 text-pretty">{{ category.descripcion }}</div>
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
      categories: [],
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('http://192.168.1.75/all_categorias');
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
  },
};
</script>