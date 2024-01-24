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
        <h1 class="text-2xl font-bold mx-4">Lista de Usarios</h1>
        <div
          class="flex justify-end flex-row ml-auto space-x-2 mx-4 items-center"
        >
          <button
            class=" w-8 h-8 text-center rounded-full border-2 text-resaltar"
          >
          <span class="flex justify-center items-center align-middle text-xl font-bold text-center">↑</span>
          </button>
          <button
            class="w-8 h-8 rounded-full border-2 text-resaltar"
          >
            <span class="flex justify-center items-center align-middle text-xl font-bold text-center">↓</span>
          </button>
          <button
            class="text-lg rounded-md px-4 py-2 mx-8 bg-resaltar "
          >
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
                      Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Position
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Status
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Action
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr class="dark:bg-gray-800 text-white ">
                  <th scope="row" class="flex items-center px-6 py-4 text-gray-100 whitespace-nowrap dark:text-white">
                      <img class="w-10 h-10 rounded-full" src="../assets/lol.jpg" alt="Jese image">
                      <div class="ps-3">
                          <div class="text-base font-semibold">Neil Sims</div>
                          <div class="font-normal text-gray-300">neil.sims@flowbite.com</div>
                      </div>  
                  </th>
                  <td class="px-6 py-4">
                      React Developer
                  </td>
                  <td class="px-6 py-4">
                      <div class="flex items-center">
                          <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                      </div>
                  </td>
                  <td class="justify-center px-6 py-4">
                      <a href="#" class="font-medium mx-1 text-blue-600 dark:text-blue-500 ">
                        <font-awesome-icon icon="pen-to-square" class="w-6 h-6 hover:-translate-y-2"/>
                      </a>
                      <a href="" class="font-medium mx-1 text-red-600 dark:text-blue-500">
                        <font-awesome-icon icon="trash" class="w-6 h-6 hover:-translate-y-2"/>
                      </a>
                  </td>
              </tr>
          </tbody>
      </table>
      </div>
    </section>
  </main>
</template>
