<script setup>
import axios from 'axios';

</script>

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
        <h1 class="text-2xl font-bold mx-4">Lista de Usuarios</h1>
        <div class="flex justify-end flex-row ml-auto space-x-2 mx-4 items-center">
          <button class=" w-8 h-8 text-center rounded-full border-2 text-resaltar">
            <span class="flex justify-center items-center align-middle text-xl font-bold text-center">↑</span>
          </button>
          <button class="w-8 h-8 rounded-full border-2 text-resaltar">
            <span class="flex justify-center items-center align-middle text-xl font-bold text-center">↓</span>
          </button>
          <button class="text-lg rounded-md px-4 py-2 mx-8 bg-resaltar ">
            NUEVO USUARIO
          </button>
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
            <tr class="dark:bg-gray-800 text-white" v-for="user in users" :key="user.id">
              <th scope="row" class="flex items-center px-6 py-4 text-gray-100 whitespace-nowrap dark:text-white">
                <img class="w-10 h-10 rounded-full" src="../assets/lol.jpg" alt="Jese image">
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
                <div v-if="isPopupOpen" class="fixed top-1/4 right-[45%]  translate-x-1/2 transalte-y-1/2 bg-gray-300 px-5 py-5 shadow-md rounded-lg border-2">
                  <div class="text-black text-center ">
                    <!-- Close button for the popup -->
                    <span @click="closePopup" class="absolute -top-14 right-2 rounded-full border-2 px-3 py-1 pointer-events-auto bg-gray-400 text-black text-2xl font-bold">&times;</span>

                    <!-- Form content -->
                    <form @submit.prevent="submitForm">
                      <!-- Your form fields go here -->
                      <label for="name">Name:</label>
                      <input type="text" id="name" v-model="formData.name" required>

                      <label for="email">Apellido:</label>
                      <input type="text" id="apellido" v-model="formData.surname" required>
                      
                      <label for="email">Email:</label>
                      <input type="email" id="email" v-model="formData.email" required>
                      
                      <label for="name">Admin:</label>
                      <input type="checkbox" id="admin" v-model="formData.admin" required>
                      <!-- Submit button -->
                      <button type="submit" class="bg-primary text-white py-2 px-4 rounded">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
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
      users: [],
      isPopupOpen: false,
        formData: {
          name: '',
          surname: '',
          email: '',
          admin: false,
          // Add more form fields as needed
        },
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('http://192.168.1.75/all_usuarios');
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    openPopup(user) {
        this.formData = {
          name: user.nombre,
          surname: user.apellido,
          email: user.correo,
          admin: user.admin,

        };
        this.isPopupOpen = true;
      },
      closePopup() {
        this.isPopupOpen = false;
      },
      submitForm() {
        // Handle form submission logic here
        console.log('Form submitted with data:', this.formData);
        // You can add your form submission logic or emit an event to the parent component
        // Reset the form data and close the popup
        this.formData = {
          name: '',
          email: '',
          // Reset other form fields as needed
        };
        this.isPopupOpen = false;
      },
  },
};

</script>