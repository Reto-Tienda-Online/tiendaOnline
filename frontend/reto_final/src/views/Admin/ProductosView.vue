<template>
    <div class="flex flex-row bg-gray-700 h-full" >
      <NavbarAdmin activeNavAdmin="Productos"/>
      <ProductosMain />
    </div>
  </template>
  
  <script setup>
  import NavbarAdmin from "@components/AdminNavBar.vue";
  import ProductosMain from "@components/AdminProductosMain.vue";
  </script>
  