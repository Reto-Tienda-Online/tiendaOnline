<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router"; // Import useRouter from Vue Router

const correo = ref("");
const contrasena = ref("");
const successMessage = ref("");
const errorMessage = ref("");
const $router = useRouter(); // Access Vue Router

const handleSubmit = async () => {
  const data = {
    username: correo.value,
    password: contrasena.value,
  };

  try {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    const response = await axios.post("token", formData);

    if (
      response.status === 200 &&
      response.data.usuario &&
      response.data.access_token &&
      response.data.usuario.admin
    ) {
      console.log("submited");
      // verificar y abrir sesion, dirigir al home
      const usuario = convertToUsuario(response.data);
      successMessage.value = "Login successful!";

      // Set user data and authentication status in localStorage
      localStorage.setItem("usuario", JSON.stringify(usuario));
      localStorage.setItem("isLoggedIn", true);

      $router.push("/admin");
    } else {
      errorMessage.value = "correo o contraseña incorrecto";
    }
  } catch (error) {
    console.error("Error registering user:", error);
    errorMessage.value = "correo o contraseña incorrecto";
  }
};

const convertToUsuario = (data) => {
  return {
    id: data.usuario.id,
    nombre: data.usuario.nombre,
    apellido: data.usuario.apellido,
    correo: data.usuario.correo,
    admin: data.usuario.admin,
    token: data.access_token,
  };
};
</script>
<template>
  <main class="h-screen w-screen flex justify-center items-center bg-background">
    <form @submit.prevent="handleSubmit" class="w-full flex flex-col items-center">
      <!-- Center the content -->
      <div class="w-1/3 h-full mb-4 px-2">
        <label class="text-gray-100 font-bold block mb-2 text-sm" for="pretext-input">Email</label>
        <div class="flex w-full">
          <div
            class="bg-primary flex items-center px-4 py-2 border border-r-0 rounded-l text-sm font-medium text-white select-none"
          >
            <svg
              class="w-7 h-6 text-grey-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div class="flex-1">
            <input
              v-model="correo"
              id="correo"
              class="w-full border px-4 py-2 rounded-r focus:border-blue-500 focus:shadow-outline outline-none"
              type="email"
              placeholder="admin@admin.com"
              required=""
            />
          </div>
        </div>
      </div>
      <div class="w-1/3 mb-4 px-2">
        <label class="text-gray-100 font-bold block mb-2 text-sm" for="pretext-input">Contraseña</label>
        <div class="flex w-full">
          <div
            class="bg-primary flex items-center px-4 py-2 border border-r-0 rounded-l text-sm font-medium text-gray-800 select-none"
          >
            <svg
              class="w-7 h-6 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="8" cy="15" r="4" />
              <line x1="10.85" y1="12.15" x2="19" y2="4" />
              <line x1="18" y1="5" x2="20" y2="7" />
              <line x1="15" y1="8" x2="17" y2="10" />
            </svg>
          </div>
          <div class="flex-1">
            <input
              v-model="contrasena"
              id="contrasena"
              class="w-full border px-4 py-2 rounded-r focus:border-blue-500 focus:shadow-outline outline-none"
              type="password"
              placeholder="******"
              required=""
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="h-10 w-1/3 px-4 py-1 my-4 text-xs rounded-full text-white bg-primary focus:outline-none hover:bg-resaltar"
      >
        Login
      </button>
      <a
        href="#"
        class="h-10 w-1/3 px-4 py-1 text-xs flex justify-center items-center rounded-full bg-white hover:bg-gray-300 text-primary"
      >
        <p class="text-sm">¿Olvidaste tu contraseña?</p>
      </a>
    </form>
    <div
      v-if="successMessage || errorMessage"
      class="flex items-center p-4 mb-4 text-sm rounded-lg dark:text-white"
      :class="{
        'bg-green-50 dark:bg-gray-800': successMessage,
        'bg-red-50 dark:bg-gray-800': errorMessage,
      }"
      role="alert"
    >
      <svg
        class="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
        />
      </svg>
      <span class="font-medium">{{
        successMessage ? successMessage : errorMessage
      }}</span>
    </div>
  </main>
</template>
