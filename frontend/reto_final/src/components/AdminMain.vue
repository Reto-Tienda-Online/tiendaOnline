<script setup>
import router from '../router/index.js';

</script>

<template>
  <main class="flex flex-col text-white w-full h-screen">
    <nav class="flex justify-end my-4 mr-6">
      <div class="flex items-center">
        <font-awesome-icon icon="bell" class="w-6 h-6" />
      </div>
    </nav>
    <section class="flex flex-row w-full h-full mt-4">

      <router-link :to="{ name: 'admin_usuarios' }"
        class="h-48 bg-blue-200 rounded-lg px-20 py-12 mt-2 mx-2 text-black flex flex-col text-md hover:-translate-y-2">
        <font-awesome-icon icon="user" class="w-8 h-8" />
        <span class="w-full my-2">Usuarios</span>
        <span class="flex justify-end font-bold text-2xl my-1">2K</span>
      </router-link>
      <router-link :to="{ name: 'admin_compras' }" 
        class="h-48 bg-green-200 rounded-lg px-20 py-12 mt-2 mx-2 text-black flex flex-col text-md hover:-translate-y-2">
        <font-awesome-icon icon="coins" class="w-8 h-8" />
        <span class="w-full my-2">Compras</span>
        <span class="flex justify-end font-bold text-2xl my-1">1M €</span>
      </router-link>
      <router-link :to="{ name: 'admin_productos' }"
        class="h-48 bg-gray-200 rounded-lg px-20 py-12 mt-2 mx-2 text-black flex flex-col text-md hover:-translate-y-2">
        <font-awesome-icon icon="gamepad" class="w-8 h-8" />
        <span class="w-full my-2">Productos</span>
        <span class="flex justify-end font-bold text-2xl my-1">500K</span>
      </router-link>
      <router-link :to="{ name: 'admin_categorias' }"
        class="h-48 bg-orange-200 rounded-lg px-20 py-12 mt-2 mx-2 text-black flex flex-col text-md hover:-translate-y-2">
        <font-awesome-icon icon="list" class="w-8 h-8" />
        <span class="w-full my-2">Categorias</span>
        <span class="flex justify-end font-bold text-2xl my-1">100K</span>
      </router-link>
    </section>
  </main>
</template>


