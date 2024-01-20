<template>
  <nav class="flex justify-between align-middle">
    <div class="flex flex-col justify-start">
      <img
        class="mt-5 ml-5 w-16 h-18"
        src="../assets/logo.svg"
        alt="Logotipo"
      />
    </div>
    <ul
      class="mt-5 flex flex-row justify-center align-middle space-x-5 text-gray-200 font-bold font-barlow"
    >
      <!-- Añadir button a cada font para sacar dialogo de las pc que contiene -->
      <li
        class="flex justify-center items-center font-barlow hover:text-gray-200 cursor-pointer"
      >
        <a
          href="#"
          class="rounded-full border-4 px-3 py-1 border-primary"
          :class="{ 'border-resaltar': isActive('Cesta') }"
          >1</a
        >
        <p class="mx-2">Cesta</p>
      </li>

      <li
        class="flex justify-center items-center font-barlow hover:text-gray-200 cursor-pointer"
      >
        <span
          class="w-10 h-1 bg-primary"
          :class="{ 'bg-resaltar': isActive('Pago') }"
        ></span>
        <a
          href="#"
          class="rounded-full border-4 px-3 py-1 border-primary"
          :class="{ 'border-resaltar': isActive('Pago') }"
          >2</a
        >
        <p class="mx-2">Pago</p>
      </li>
      <li
        class="flex justify-center items-center font-barlow hover:text-gray-200 cursor-pointer"
      >
        <span
          class="w-10 h-1 bg-primary"
          :class="{ 'bg-resaltar': isActive('ActivarJuego') }"
        ></span>
        <a
          href="#"
          class="rounded-full border-4 px-3 py-1 border-primary"
          :class="{ 'border-resaltar': isActive('ActivarJuego') }"
          >3</a
        >
        <p class="mx-2">Activar Juego</p>
      </li>
    </ul>
    <ul class="flex flex-row text-gray-200 mt-5 mr-5 space-x-7">
      <!-- Agregar respectivos buttons para inicio de sesion y carro de compras -->
      <li>
        <font-awesome-icon
          icon="lock"
          class="text-2xl hover:text-resaltar cursor-pointer transition-all duration-500 ease-in-out"
        />
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps(["activeElement"]);

const isActive = (element) => element === props.activeElement;
</script>
