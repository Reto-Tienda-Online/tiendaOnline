<script setup>
</script>

<template>
  <main class="flex flex-col text-white w-full h-full">
    <nav class="flex justify-end my-4 mr-6">
      <div class="relative flex items-center mx-3">
        <input
          type="text"
          class="border-2 border-resaltar bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none text-gray-700"
          placeholder="Buscar..."
        />
        <button class="absolute right-3 top-2 text-gray-500">
            <font-awesome-icon icon="magnifying-glass" />
        </button>
      </div>
      <div class="flex items-center">
        <font-awesome-icon icon="bell" class="w-6 h-6" />
      </div>
    </nav>
    <section
      class="flex flex-row w-full h-full mt-4"
    >
      <a
        href=""
        class="bg-blue-200 rounded-lg px-20 py-12 mt-2 mx-2 text-black flex flex-col text-md hover:-translate-y-2"
      >
        <font-awesome-icon icon="user" class="w-8 h-8" />
        <span class="w-full my-2">Usuarios</span>
        <span class="flex justify-end font-bold text-2xl my-1">2K</span>
      </a>
      <a
        href=""
        class="bg-green-200 rounded-lg px-20 py-12 mt-2 mx-2 text-black flex flex-col text-md hover:-translate-y-2"
      >
        <font-awesome-icon icon="coins" class="w-8 h-8" />
        <span class="w-full my-2">Compras</span>
        <span class="flex justify-end font-bold text-2xl my-1">1M €</span>
      </a>
      <a
        href=""
        class="bg-gray-200 rounded-lg px-20 py-12 mt-2 mx-2 text-black flex flex-col text-md hover:-translate-y-2"
      >
        <font-awesome-icon icon="gamepad" class="w-8 h-8" />
        <span class="w-full my-2">Productos</span>
        <span class="flex justify-end font-bold text-2xl my-1">500K</span>
      </a>
      <a
        href=""
        class="bg-orange-200 rounded-lg px-20 py-12 mt-2 mx-2 text-black flex flex-col text-md hover:-translate-y-2"
      >
        <font-awesome-icon icon="list" class="w-8 h-8" />
        <span class="w-full my-2">Categorias</span>
        <span class="flex justify-end font-bold text-2xl my-1">100K</span>
      </a>
    </section>
  </main>
</template>
