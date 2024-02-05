<script setup>
const props = defineProps(["activeNavAdmin"]);

const isActive = (element) => element === props.activeNavAdmin;
</script>
<template>
  <nav
    class="w-[250px] h-auto flex flex-col justify-center bg-background text-white p-4 transition-transform ease-in-out duration-300"
    :class="{ '-translate-x-full': !menuVisible }"
  >
    <div class="flex flex-col justify-center">
      <font-awesome-icon
        icon="user"
        class="w-14 h-14 px-4 py-4 mx-auto rounded-full border-2"
      />
      <h2 class="flex justify-center text-center text-xl my-2">
        Administrador
      </h2>
    </div>

    <!-- Contenido del menú desplegable -->
    <div class="mt-2 w-full">
      <a
        href="/admin"
        class="flex justify-center px-4 py-2 hover:bg-resaltar my-2 rounded-md"
        :class="{ 'bg-resaltar': isActive('Home') }"
        >Home</a
      >
      <a
        href="/admin/usuarios"
        class="flex justify-center px-4 py-2 hover:bg-resaltar my-2 rounded-md"
        :class="{ 'bg-resaltar': isActive('Usuarios') }"
        >Usuarios</a
      >
      <a
        href="/admin/compras"
        class="flex justify-center px-4 py-2 hover:bg-resaltar my-2 rounded-md"
        :class="{ 'bg-resaltar': isActive('Compras') }"
        >Compras</a
      >

      <a
        href="/admin/productos"
        class="flex justify-center px-4 py-2 hover:bg-resaltar my-2 rounded-md"
        :class="{ 'bg-resaltar': isActive('Productos') }"
        >Productos</a
      >
      <a
        href="/admin/categorias"
        class="flex justify-center px-4 py-2 hover:bg-resaltar my-2 rounded-md"
        :class="{ 'bg-resaltar': isActive('Categorias') }"
        >Categorías</a
      >
      <button
        @click="handleLogout"
        class="flex justify-center items-center text-center text-pretty px-4 py-2 hover:bg-resaltar my-2 rounded-md w-full"
      >
        Sign Out
      </button>
    </div>
  </nav>
  <!-- Botón para mostrar/ocultar el menú -->
  <button
    @click="toggleMenu"
    class="absolute top-4 left-56 text-white focus:outline-none"
    :class="{ ' -translate-x-52 delay-150': !menuVisible }"
  >
    <svg
      class="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16m-7 6h7"
      ></path>
    </svg>
  </button>
</template>

<script>
import { useRoute } from "vue-router";
const route = useRoute();

export default {
  data() {
    return {
      menuVisible: true,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    //SESSION MANAGEMENT
    handleLogout() {
      // Clear user data and authentication status from localStorage
      localStorage.removeItem("usuario");
      localStorage.removeItem("isLoggedIn");

      // Redirect to the home page
      this.$router.push("/adminLogin");
    },
  },
};
</script>

<style scoped>
/* Agrega estilos adicionales según sea necesario */
</style>
