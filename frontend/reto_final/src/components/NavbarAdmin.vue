<template>
  <nav class="bg-background text-white p-4 w-full h-screen flex flex-col justify-center transition-transform ease-in-out duration-300" 
    :class="{ '-translate-x-full': !menuVisible }">
    <div class="flex flex-col justify-center">
      <img class="rounded-full  border-2 border-secondary w-full h-[170px] flex justify-center" src="" alt="Imagen del Administrador"></img>
      <h2 class="flex justify-center text-xl my-2">Administrador Nombre</h2>
    </div>

    <!-- Contenido del menú desplegable -->
    <div class="mt-2 w-full">
      <a href="#" class="flex justify-center px-4 py-2 bg-resaltar my-2 rounded-md">Usuarios</a>
      <a href="#" class="flex justify-center px-4 py-2 hover:bg-resaltar my-2 rounded-md">Productos</a>
      <a href="#" class="flex justify-center px-4 py-2 hover:bg-resaltar my-2 rounded-md">Categorías</a>
    </div>
  </nav>
  <!-- Botón para mostrar/ocultar el menú -->
    <button @click="toggleMenu" class="absolute top-4 left-40 text-white focus:outline-none" :class="{ ' -translate-x-32 delay-150': !menuVisible }">
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
</template>

<script>
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
  },
};
</script>

<style scoped>
/* Agrega estilos adicionales según sea necesario */
</style>
