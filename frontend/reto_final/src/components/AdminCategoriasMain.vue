<script setup>
import axios from 'axios';
</script>

<template>
  <main class="flex flex-col text-white w-full h-screen"
    :class="{ 'w-full h-full bg-auto bg-black opacity-100 cursor-pointer': newCategoryModal || updateCategoryModal || isDeletePopupOpen }">
    <nav class="flex justify-end my-4 mr-6">
      <div class="relative flex items-center mx-3">
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
        <h1 class="text-2xl font-bold mx-4">Lista de Categorias</h1>
        <div class="flex justify-end flex-row ml-auto space-x-2 mx-4 items-center">
          <!--Paginate by 5 categorys-->
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
          <button @click="openNewCategoryModal()" class="text-md rounded-md px-4 py-2 mx-8 bg-resaltar font-bold">
            + CATEGORÍA
          </button>
        </div>
      </div>
      <div>
        <!-- PopUp para la creación de Categorias -->
        <div v-if="newCategoryModal"
          class="fixed top-[12%] right-[45%] translate-x-1/2 transalte-y-1/2 bg-gray-300 px-5 py-5 shadow-md rounded-lg border-2">
          <div class="text-black text-center">
            <span @click="closeCategoryModal()"
              class="absolute -top-14 right-2 rounded-full border-2 px-2 py-0 pointer-events-auto bg-gray-400 text-black text-2xl font-bold">&times;</span>
            <!-- Formulario para la creación de usuarios -->
            <form @submit.prevent="submitNewCategory" class="max-w-md mx-auto mt-8">
              <h1 class="my-4 text-xl font-bold">Nueva Categoría</h1>
              <div class="mb-4 text-left">
                <label class="text-sm text-gray-600  font-bold">Nombre:
                  <input type="text" v-model="newCategory.categoria" required
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-primary">
                </label>
              </div>
              <div class="mb-4 text-left">
                <label class="text-sm text-gray-600 font-bold">Descripción:
                  <!-- Cambiar el input a textarea -->
                  <textarea v-model="newCategory.descripcion" required
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-primary"></textarea>
                </label>
              </div>
              <button type="submit" class="w-full bg-resaltar text-white text-lg my-2 py-2 px-4 rounded">
                Crear Categoría
              </button>
            </form>
          </div>
        </div>
        <!-- Delete Popup component -->
        <div v-if="isDeletePopupOpen"
          class="fixed top-1/4 right-[45%]  translate-x-1/2 transalte-y-1/2 bg-gray-300 px-5 py-5 rounded-lg cursor-pointer">
          <div class="text-black text-center ">
            <!-- Close button for the popup -->
            <h2 class="py-3">¿Seguro que quieres eliminar el usuario <span class="font-bold">{{
              categoryToDelete.categoria
            }}</span>?

            </h2>
            <button @click="closeDeletePopup()" class="bg-red-500 text-white py-2 mx-1 px-4 rounded ">Cancelar
            </button>
            <button @click="deleteCategory()" class="bg-green-500 text-white py-2 mx-1 px-4 rounded">Confirmar
            </button>
          </div>
        </div>

        <!-- Update popup component -->
        <div v-if="updateCategoryModal"
          class="fixed top-[12%] right-[45%]  translate-x-1/2 transalte-y-1/2 bg-gray-300 px-5 py-5 shadow-md rounded-lg border-2">
          <div class="text-black text-center ">
            <!-- Close button for the popup -->
            <span @click="closeUpdatePopup()"
              class="absolute -top-14 right-2 rounded-full border-2 px-2 py-0 pointer-events-auto bg-gray-400 text-black text-2xl font-bold">&times;</span>

            <!-- Form content -->
            <form @submit.prevent="submit_update" class="max-w-md mx-auto mt-8 ">
              <h1 class="my-4 text-xl font-bold">Actualizar Categoría</h1>
              <div class="mb-4 text-left">
                <label class="text-sm text-gray-600  font-bold">Nombre:
                  <input type="text" v-model="formUpdateCategory.categoria" required
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-primary">
                </label>
              </div>
              <div class="mb-4 text-left">
                <label class="text-sm text-gray-600 font-bold">Descripción:
                  <!-- Cambiar el input a textarea -->
                  <textarea v-model="formUpdateCategory.descripcion" required
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-primary"></textarea>
                </label>
              </div>
              <!-- Submit button -->
              <button type="submit" class="w-full bg-resaltar text-white text-lg py-2 px-4 rounded">
                Actualizar
              </button>
            </form>
          </div>
        </div>

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
            <tr class="dark:bg-gray-800 text-white" v-for="(category, index) in combinedCategories" :key="category.id">
              <th scope="row" class="flex items-center px-6 py-4 text-gray-100 whitespace-nowrap dark:text-white">
                <div class="font-bold text-md text-white">{{ category.categoria }}</div>

              </th>
              <td class="px-6 py-4">
                <div class="font-normal text-gray-300 text-pretty">{{ category.descripcion.substring(0, 25) }}...</div>
              </td>
              <td class="justify-center px-6 py-4">
                <button @click="openUpdatePopup(category)" class="font-medium mx-1 text-blue-600 dark:text-blue-500 ">
                  <font-awesome-icon icon="pen-to-square" class="w-6 h-6 hover:-translate-y-2" />
                </button>
                <button @click="deleteCategoryModal_function(category)"
                  class="font-medium mx-1 text-red-600 dark:text-blue-500">
                  <font-awesome-icon icon="trash" class="w-6 h-6 hover:-translate-y-2" />
                </button>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      //PopUp
      newCategoryModal: false,
      updateCategoryModal: false,
      isDeletePopupOpen: false,
      newCategory: {
        categoria: '',
        descripcion: '',
      },
      formUpdateCategory: {
        id: '',
        categoria: '',
        descripcion: '',
      },
      //Paginate
      currentPage: 1,
      categoriesPerPage: 6,
      searchQuery: '',
    };
  },
  computed: {

    totalPages() {
      return Math.ceil(this.categories.length / this.categoriesPerPage);
    },

    combinedCategories() {
      // Filter users based on the search query
      const filteredCategories = this.categories.filter(category => {
        const searchTerm = this.searchQuery.toLowerCase();
        return (
          category.categoria.toLowerCase().includes(searchTerm)
        );
      });

      // Paginate the filtered users
      const startIndex = (this.currentPage - 1) * this.categoriesPerPage;
      const endIndex = startIndex + this.categoriesPerPage;
      return filteredCategories.slice(startIndex, endIndex);
    },

  },

  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get(`/all_categorias`);
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    //Create new category
    openNewCategoryModal() {
      this.newCategoryModal = true;
    },
    closeCategoryModal() {
      this.newCategoryModal = false;
    },
    submitNewCategory() {
      axios.post('/categorias', this.newCategory)
        .then(response => {
          this.fetchCategories();
          this.closeCategoryModal();
        })
        .catch(error => {
          console.error('Error al crear el categoria:', error);
        });
    },
    //Update Category
    openUpdatePopup(category) {
      this.formUpdateCategory = {
        id: category.id,
        categoria: category.categoria,
        descripcion: category.descripcion,
      },
        this.updateCategoryModal = true;

    },
    closeUpdatePopup() {
      this.updateCategoryModal = false;
    },
    submit_update() {
      console.log(this.formUpdateCategory);
      const { id, ...allowedData } = this.formUpdateCategory;
      axios.put(`/categorias/${this.formUpdateCategory.id}`, allowedData)
        .then(response => {
          this.fetchCategories();
          this.closeUpdatePopup();
        })
        .catch(error => {
          console.error('Error al actualizar el categoria:', error);
        });
    },
    // Delete Category
    deleteCategoryModal_function(category) {
      this.categoryToDelete = category;
      this.isDeletePopupOpen = true;
    },
    closeDeletePopup() {
      this.isDeletePopupOpen = false;
    },
    deleteCategory() {
      const categoryID = this.categoryToDelete.id;
      axios.delete(`/categorias/${categoryID}`)
        .then(response => {
          this.fetchCategories();
          this.closeDeletePopup();
        })
        .catch(error => {
          console.error('Error al eliminar el Categoria:', error);
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