<script setup></script>

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
    <section class="flex flex-col w-full h-full mt-4 bg-transparent">
      <div class="flex flex-row">
        <h1 class="text-2xl font-bold">Lista de Usarios</h1>
        <div
          class="flex justify-end flex-row ml-auto space-x-2 mx-4 items-center"
        >
          <button
            class="text-resaltar rounded-full border-2 w-8 h-8 text-center"
          >
            ↑
          </button>
          <button
            class="text-resaltar rounded-full border-2 w-8 h-8 text-centeer font-bold"
          >
            ↓
          </button>
          <button
            class="px-2 py-2 bg-resaltar rounded-md mx-1 font-bold text-lg"
          >
            NUEVO USUARIO
          </button>
        </div>
      </div>
      <div>
        <!-- Tabla de usuarios -->
        <table class="min-w-full">
          <thead class="">
            <tr>
              <th class="py-2 px-4 border-b">ID</th>
              <th class="py-2 px-4 border-b">Nombre</th>
              <th class="py-2 px-4 border-b">Correo Electrónico</th>
              <th class="py-2 px-4 border-b">Acciones</th>
            </tr>
          </thead>
          <tbod class="">
            <!-- Fila de ejemplo (puedes repetir esto para cada usuario) -->
            <tr>
              <td class="">1</td>
              <td class="py-2 px-4 border-b">John Doe</td>
              <td class="py-2 px-4 border-b">john@example.com</td>
              <td class="py-2 px-4 border-b">
                <button class="text-blue-500 hover:underline">Ver</button>
                <button class="text-yellow-500 hover:underline">Editar</button>
                <button class="text-red-500 hover:underline">Eliminar</button>
              </td>
            </tr>
          </tbod>
        </table>
      </div>
    </section>
  </main>
</template>
