<script setup></script>

<template>
  <div class="">
    <div class="flex justify-between align-middle">
        <img class="mt-5 ml-5 w-10" src="../assets/vite.svg" alt="Logotipo" />
        <ul class="flex flex-row text-gray-200 mt-5 mr-5 space-x-7">
            <!--Agregar respectivos buttons para inicio de sesion y carro de compras-->
            <li><font-awesome-icon icon="shopping-cart" class="text-2xl"/></li>
            <li><font-awesome-icon icon="user" class="text-2xl"/></li>
        </ul>
    </div>
    <ul
      class="flex flex-row justify-center align-middle space-x-5 text-gray-200 font-bold"
    >
      <!--Añadir button a cada font para sacar dialogo de las pc que contiene -->
      <li>
        Pc
        <font-awesome-icon icon="chevron-down" />
      </li>
      <li>
        Playstation
        <font-awesome-icon icon="chevron-down" />
      </li>
      <li>
        Xbox
        <font-awesome-icon icon="chevron-down" />
      </li>
      <li>
        Nintendo
        <font-awesome-icon icon="chevron-down" />
      </li>
    </ul>
  </div>
</template>
