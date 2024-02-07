<script setup>
import axios from 'axios';
import Alert from '@components/AdminAlert.vue';
</script>

<template>
  <Alert :successMessage="successMessage" :errorMessage="errorMessage" />
  <main class="flex flex-col text-white w-full h-screen"
    :class="{ 'w-full h-full bg-auto bg-black opacity-100 cursor-pointer': isPopupOpen || isDeletePopupOpen || isNewUserPopupOpen }">
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
        <h1 class="text-2xl font-bold mx-4">Lista de Usuarios</h1>
        <div class="flex justify-end flex-row ml-auto space-x-2 mx-4 items-center">
          <!--Paginate by 5 users-->
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
          <button @click="openNewUserPopup()" class="text-md rounded-md px-4 py-2 mx-8 bg-resaltar font-bold">
            + USUARIO
          </button>
        </div>

      </div>
      <!-- Nuevo Popup para la creación de usuarios -->
      <div v-if="isNewUserPopupOpen"
        class="fixed top-[12%] right-[45%] translate-x-1/2 transalte-y-1/2 bg-gray-300 px-5 py-5 shadow-md rounded-lg border-2">
        <div class="text-black text-center">
          <span @click="closeNewUserPopup"
            class="absolute -top-14 right-2 rounded-full border-2 px-2 py-0 pointer-events-auto bg-gray-400 text-black text-2xl font-bold">&times;</span>
          <!-- Formulario para la creación de usuarios -->
          <form @submit.prevent="createNewUser" class="max-w-md mx-auto mt-8">
            <h1 class="my-4 text-xl font-bold">Nuevo Usuario</h1>
            <div class="flex flex-row text-left ">
              <div class="mb-4 mx-2">
                <label for="newUserName" class="text-sm text-gray-600  font-bold">Nombre:</label>
                <input type="text" id="newUserName" v-model="newUserData.nombre" required
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-primary">
              </div>
              <div class="mb-4">
                <label for="newUserApellido" class="text-sm text-gray-600 font-bold">Apellido:</label>
                <input type="text" id="newUserApellido" v-model="newUserData.apellido" required
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-primary">
              </div>
            </div>
            <div class="mb-4 text-left">
              <label for="newUserEmail" class="text-sm text-gray-600  font-bold">Correo:</label>
              <input type="email" id="newUserEmail" v-model="newUserData.correo" required
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-primary">
            </div>
            <div class="mb-4 text-left">
              <label for="newUserPassword" class="text-sm text-gray-600  font-bold">Contraseña:</label>
              <input type="password" id="newUserPassword" v-model="newUserData.contrasena" required
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-primary">
            </div>
            <label for="newUserAdmin" class="flex items-center my-2 text-sm text-gray-600  font-bold">
              <input type="checkbox" id="newUserAdmin" v-model="newUserData.admin" class="mr-2 px-1 py-2">
              Admin
            </label>
            <button type="submit" class="w-full bg-resaltar text-white text-lg my-2 py-2 px-4 rounded">
              Crear Usuario
            </button>
          </form>

        </div>
      </div>
      <div>
        <!-- Tabla de usuarios -->
        <table class="w-full text-sm text-left mt-4 rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class=" border-b-2 text-xs text-white uppercase  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Nombre y Email
              </th>
              <th scope="col" class="px-6 py-3">
                Admin
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="dark:bg-gray-800 text-white" v-for="(user, index) in  combinedUsers" :key="user.id">
              <th scope="row" class="flex items-center px-6 py-4 text-gray-100 whitespace-nowrap dark:text-white">
                <div class="ps-3">
                  <div class="text-base font-semibold">{{ user.nombre }} {{ user.apellido }}</div>
                  <div class="font-normal text-gray-300">{{ user.correo }}</div>
                </div>
              </th>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"
                    :class="{ 'bg-green-500': user.admin, 'bg-red-500': !user.admin }"></div> Admin
                </div>
              </td>
              <td class="flex flex-row justify-center px-6 py-4">
                <!-- Button to open the popup -->
                <button @click="openPopup(user)" class="text-blue-500 rounded">
                  <font-awesome-icon icon="pen-to-square" class="w-6 h-6 hover:-translate-y-2" />
                </button>
                <!-- Popup component -->
                <div v-if="isPopupOpen"
                  class="fixed top-[12%] right-[45%]  translate-x-1/2 transalte-y-1/2 bg-gray-300 px-5 py-5 shadow-md rounded-lg border-2">
                  <div class="text-black text-center ">
                    <!-- Close button for the popup -->
                    <span @click="closePopup"
                      class="absolute -top-14 right-2 rounded-full border-2 px-2 py-0 pointer-events-auto bg-gray-400 text-black text-2xl font-bold">&times;</span>

                    <!-- Form content -->
                    <form @submit.prevent="submitForm" class="max-w-md mx-auto mt-8 ">
                      <h1 class="my-4 text-xl font-bold">Actualizar Usuario</h1>
                      <div class="flex flex-row text-left ">
                        <div class="mb-4 mx-2">
                          <label for="newUserName" class="text-sm text-gray-600  font-bold">Nombre:</label>
                          <input type="text" id="name" v-model="formData.nombre" required
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-primary">
                        </div>
                        <div class="mb-4">
                          <label for="newUserApellido" class="text-sm text-gray-600 font-bold">Apellido:</label>
                          <input type="text" id="apellido" v-model="formData.apellido" required
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-primary">
                        </div>
                      </div>

                      <div class="mb-4 text-left">
                        <label for="newUserEmail" class="text-sm text-gray-600  font-bold">Email:</label>
                        <input type="email" id="email" v-model="formData.correo" required
                          class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-primary">
                      </div>
                      <label for="newUserAdmin" class="flex items-center my-2 text-sm text-gray-600  font-bold">
                        <input type="checkbox" id="admin" v-model="formData.admin" class="mr-2 px-1 py-2">
                        Admin
                      </label>
                      <!-- Submit button -->
                      <button type="submit" class="w-full bg-resaltar text-white text-lg py-2 px-4 rounded">
                        Actualizar
                      </button>

                    </form>
                  </div>
                </div>
                <button @click="confirmDelete(user)" class="font-medium mx-1 text-red-600 dark:text-blue-500">
                  <font-awesome-icon icon="trash" class="w-6 h-6 hover:-translate-y-2" />
                </button>
                <!-- Delete Popup component -->
                <div v-if="isDeletePopupOpen"
                  class="fixed top-1/4 right-[45%]  translate-x-1/2 transalte-y-1/2 bg-gray-300 px-5 py-5 rounded-lg cursor-pointer">
                  <div class="text-black text-center ">
                    <!-- Close button for the popup -->
                    <h2 class="py-3">¿Seguro que quieres eliminar el usuario <span class="font-bold">{{
                      userToDelete.nombre }}</span>?
                    </h2>
                    <button @click="closeDeletePopup" class="bg-red-500 text-white py-2 mx-1 px-4 rounded ">Cancelar
                    </button>
                    <button @click="deleteUser" class="bg-green-500 text-white py-2 mx-1 px-4 rounded">Confirmar
                    </button>
                  </div>
                </div>
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
      users: [],
      isPopupOpen: false,
      isDeletePopupOpen: false,
      isNewUserPopupOpen: false,
      formData: {
        nombre: '',
        apellido: '',
        correo: '',
        admin: false,
      },
      newUserData: {
        nombre: '',
        apellido: '',
        correo: '',
        contrasena: '',
        admin: false,
      },
      currentPage: 1,
      usersPerPage: 6,
      items: [],
      searchQuery: '',
      successMessage: '', // Agregar esta línea
      errorMessage: '',  // Agregar esta línea
    };
  },
  computed: {

    totalPages() {
      return Math.ceil(this.users.length / this.usersPerPage);
    },

    combinedUsers() {
      // Filter users based on the search query
      const filteredUsers = this.users.filter(user => {
        const searchTerm = this.searchQuery.toLowerCase();
        return (
          user.nombre.toLowerCase().includes(searchTerm) ||
          user.apellido.toLowerCase().includes(searchTerm) ||
          user.correo.toLowerCase().includes(searchTerm)
        );
      });

      // Paginate the filtered users
      const startIndex = (this.currentPage - 1) * this.usersPerPage;
      const endIndex = startIndex + this.usersPerPage;
      return filteredUsers.slice(startIndex, endIndex);
    },

  },
  mounted() {
    this.fetchUsers();
  },

  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get(`/all_usuarios`);
        this.users = response.data;

      } catch (error) {
        console.error('Error fetching users:', error);
      }

    },
    // Edit User
    openPopup(user) {
      this.formData = {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        correo: user.correo,
        contrasena: user.contrasena,
        admin: user.admin,

      };
      this.isPopupOpen = true;
    },
    closePopup() {
      this.isPopupOpen = false;
    },
    // Submit Form 
    submitForm() {
      const { id, ...allowedData } = this.formData;
      axios.put(`/usuarios/${this.formData.id}`, allowedData)
        .then(response => {

          this.fetchUsers();
          this.closePopup();
          this.successMessage = 'Usuario actulizado con exíto';
        })
        .catch(error => {
          console.error('Error al actualizar el usuario:', error);
        });
    },
    // Delete User
    confirmDelete(user) {
      this.userToDelete = user;
      this.isDeletePopupOpen = true;
    },
    closeDeletePopup() {
      this.isDeletePopupOpen = false;
    },
    deleteUser() {
      const userID = this.userToDelete.id;
      axios.delete(`/usuarios/${userID}`)
        .then(response => {
          this.fetchUsers();
          this.closeDeletePopup();
          const successMessage = 'Usuario eliminado con exito';
        })
        .catch(error => {
          console.error('Error al eliminar el usuario:', error);
        });
    },
    // New User 
    openNewUserPopup() {
      this.isNewUserPopupOpen = true;
    },
    closeNewUserPopup() {
      this.isNewUserPopupOpen = false;
    },
    createNewUser() {
      axios.post('/register', this.newUserData)
        .then(response => {
          this.fetchUsers();
          this.closeNewUserPopup();
        })
        .catch(error => {
          console.error('Error al crear el usuario:', error);
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