<template>
    <div class="flex flex-row bg-gray-700 h-full" >
      <NavbarAdmin activeNavAdmin="Compras"/>
      <ComprasMain />
    </div>
  </template>
  
  <script setup>
  import NavbarAdmin from "@components/AdminNavBar.vue";
  import ComprasMain from "@components/AdminComprasMain.vue";
  </script>
  