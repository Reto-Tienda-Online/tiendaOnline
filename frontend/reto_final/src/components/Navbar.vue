<script setup></script>

<template>
  <div class="">
    <div class="flex justify-between align-middle">
      <div class="flex flex-col justify-start">
        <img class="mt-5 ml-5 w-12" src="../assets/logo.svg" alt="Logotipo" />
      </div>
      <ul
        class="mt-5 flex flex-row justify-center align-middle space-x-5 text-gray-200 font-bold font-barlow"
      >
        <!--Añadir button a cada font para sacar dialogo de las pc que contiene -->
        <li class="font-barlow hover:text-gray-200 cursor-pointer">
          Pc
          <font-awesome-icon icon="chevron-down" />
        </li>
        <li class="font-barlow hover:text-gray-200 cursor-pointer">
          Playstation
          <font-awesome-icon icon="chevron-down" />
        </li>
        <li class="font-barlow hover:text-gray-200 cursor-pointer">
          Xbox
          <font-awesome-icon icon="chevron-down" />
        </li>
        <li class="font-barlow hover:text-gray-200 cursor-pointer">
          Nintendo
          <font-awesome-icon icon="chevron-down" />
        </li>
      </ul>
      <ul class="flex flex-row text-gray-200 mt-5 mr-5 space-x-7">
        <!--Agregar respectivos buttons para inicio de sesion y carro de compras-->
        <li>
          <font-awesome-icon icon="shopping-cart" class="text-2xl hover:text-resaltar cursor-pointer transition-all duration-500 ease-in-out" />
        </li>
        <li>
          <font-awesome-icon icon="user" class="text-2xl hover:text-resaltar cursor-pointer transition-all duration-500 ease-in-out" />
        </li>
      </ul>
    </div>
  </div>
</template>
