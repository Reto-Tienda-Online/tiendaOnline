<script setup>
import axios from 'axios';
</script>

<template>
  <main class="flex flex-col text-white w-full h-screen">
    <nav class="flex justify-end my-4 mr-6">
      <div class="relative flex items-center mx-3">
        <!-- barra de busqueda -->
        <input v-model="searchQuery" type="text"
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
        <h1 class="text-2xl font-bold mx-4">Lista de Compras</h1>
        <div class="flex justify-end flex-row ml-auto space-x-2 mx-4 items-center">
          <!--Paginate by 5 products-->
          <div class="flex justify-between items-center mx-4 my-2">
            <div class="flex items-center">
              <button @click="prevPage" class="w-8 h-8 text-center text-resaltar">
                <font-awesome-icon icon="circle-left" class="w-6 h-6" />
              </button>
              <button @click="nextPage" class="w-8 h-8 text-resaltar">
                <font-awesome-icon icon="circle-right" class="w-6 h-6" />
              </button>
            </div>
            <div class="text-white text-sm">
              Página {{ currentPage }} de {{ totalPages }}
            </div>
          </div>
        </div>
      </div>
      <div>
        <!-- Tabla de productos -->
        <table class="w-full text-sm text-left mt-4 rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class=" border-b-2 text-xs text-white uppercase  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Juego
              </th>
              <th scope="col" class="px-6 py-3">
                Cantidad
              </th>
              <th scope="col" class="px-6 py-3">
                Importe(€)
              </th>
              <th scope="col" class="px-6 py-3">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="dark:bg-gray-800 text-white" v-for="(compra, index) in combined_compras" :key="compra.id">
              <th scope="row" class="flex items-center px-6 py-4 text-gray-100 whitespace-nowrap dark:text-white">
                <div @click="goToDetalleJuego(id_producto)" class="font-bold text-md text-white">{{ compra.producto }}</div>
              </th>
              <td class="px-6 py-4">
                <div class="font-normal text-gray-300 text-pretty">{{ compra.cantidad }}</div>
              </td>
              <td class="px-6 py-4">
                <div class="font-normal text-gray-300 text-pretty">{{ compra.importe }}</div>
              </td>
              <td class="px-6 py-4">
                <div class="font-normal text-gray-300 text-pretty">{{ converToDate(compra.fechacompra) }}</div>
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
import router from '../router/index.js';

export default {
  data() {
    return {
      compras: [],
      //Paginate
      currentPage: 1,
      comprasPerPage: 6,
      searchQuery: '',
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.compras.length / this.comprasPerPage);
    },
    combined_compras() {
      // Filter compras based on the search query
      const filtered_compras = this.compras.filter(compra => {
        const searchTerm = this.searchQuery.toLowerCase();
        return (
          compra.producto.toLowerCase().includes(searchTerm)
        );
      });

      // Paginate the filtered compras
      const startIndex = (this.currentPage - 1) * this.comprasPerPage;
      const endIndex = startIndex + this.comprasPerPage;
      return filtered_compras.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.fetchCompras();
  },
  methods: {
    async fetchCompras() {

      try {
        const usuarioId = JSON.parse(localStorage.getItem('usuario')).id; 
        const response = await axios.get(`compras_usuario/${usuarioId}`);
        this.compras = response.data;
      } catch (error) {
        console.error('Error fetching compras:', error);
      }
    },
    async goToDetalleJuego(idJuego) {
      try {
        const response = await axios.get(`all_productos?id=${idJuego}`);
        const juego = response.data;
        localStorage.setItem(JSON.stringify(juego));
        router.push('juegoDetalle');
      } catch (error) {
        console.error('Error fetching juego:', error);
      }
    },
    converToDate(datetime) {
        const date = new Date(datetime);
        return date.toISOString().substring(0, 10);
    },
    //Paginate
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>
