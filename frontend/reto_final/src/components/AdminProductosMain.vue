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
        <h1 class="text-2xl font-bold mx-4">Lista de Productos</h1>
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
          <router-link :to="{ name: 'admin_nuevo_producto'}" class="text-md rounded-md px-4 py-2 mx-8 bg-resaltar font-bold">
            + PRODUCTO
          </router-link>
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
                Plataforma
              </th>
              <th scope="col" class="px-6 py-3">
                Precio(€)
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="dark:bg-gray-800 text-white" v-for="(product, index) in combined_products" :key="product.id">
              <th scope="row" class="flex items-center px-6 py-4 text-gray-100 whitespace-nowrap dark:text-white">
                <div class="font-bold text-md text-white">{{ product.producto }}</div>
              </th>
              <td class="px-6 py-4">
                <div class="font-normal text-gray-300 text-pretty">{{ product.nombreplataforma }}</div>
              </td>
              <td class="px-6 py-4">
                <div class="font-normal text-gray-300 text-pretty">{{ product.precio_unitario }}</div>
              </td>
              <td class="justify-center px-6 py-4">
                <router-link :to="{ name: 'adminProductDetail', params: { name: product.producto } }"
                  class="font-medium mx-1 text-blue-600 dark:text-blue-500">
                  <font-awesome-icon icon="pen-to-square" class="w-6 h-6 hover:-translate-y-2" />
                </router-link>
                <button @click="openDeletePopup(product)" class="font-medium mx-1 text-red-600 dark:text-blue-500">
                  <font-awesome-icon icon="trash" class="w-6 h-6 hover:-translate-y-2" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Popup Delete -->
        <div v-if="popupDelete"
          class="fixed top-1/4 right-[45%]  translate-x-1/2 transalte-y-1/2 bg-gray-300 px-5 py-5 rounded-lg cursor-pointer">
          <div class="text-black text-center ">
            <!-- Close button for the popup -->
            <h2 class="py-3">¿Seguro que quieres eliminar el usuario <span class="font-bold">{{
              productName }}</span>?
            </h2>
            <button @click="closeDeletePopup" class="bg-red-500 text-white py-2 mx-1 px-4 rounded ">Cancelar
            </button>
            <button @click="deleteProduct(productID)" class="bg-green-500 text-white py-2 mx-1 px-4 rounded">Confirmar
            </button>
          </div>
        </div>

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

      popupDelete: false,
      //Paginate
      currentPage: 1,
      productsPerPage: 6,
      items: [],
      searchQuery: '',
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.productsPerPage);
    },
    combined_products() {
      // Filter products based on the search query
      const filtered_products = this.products.filter(product => {
        const searchTerm = this.searchQuery.toLowerCase();
        return (
          product.producto.toLowerCase().includes(searchTerm) ||
          product.nombreplataforma.toLowerCase().includes(searchTerm)
        );
      });

      // Paginate the filtered products
      const startIndex = (this.currentPage - 1) * this.productsPerPage;
      const endIndex = startIndex + this.productsPerPage;
      return filtered_products.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {

      try {
        const response = await axios.get(`/all_productos`);
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    //Delete
    openDeletePopup(product) {
      this.productID = product.id;
      this.productName = product.producto;
      this.popupDelete = true;
      console.log(this.productID);
      axios.delete(`/productos/${this.productID}`).then(response => {
        this.fetchProducts();
        this.popupDelete = false;
        console.log('Producto eliminado correctamente');
      }).catch(error => {
        console.error('Error al eliminar el producto:', error);
      });
    },
    closeDeletePopup() {
      this.popupDelete = false;
    },
    deleteProduct(productID) {
      axios.delete(`/delete_producto/${productID}`).then(response => {
        this.fetchProducts();
        this.popupDelete = false;
        console.log('Producto eliminado correctamente');
      }).catch(error => {
        console.error('Error al eliminar el producto:', error);
      });
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
