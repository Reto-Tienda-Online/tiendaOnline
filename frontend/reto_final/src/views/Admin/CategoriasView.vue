<template>
    <div class="flex flex-row bg-gray-700 h-full" >
      <NavbarAdmin activeNavAdmin="Categorias"/>
      <CategoriasMain />
    </div>
  </template>
  
  <script setup>
  import NavbarAdmin from "@components/AdminNavBar.vue";
  import CategoriasMain from "@components/AdminCategoriasMain.vue";
  </script>
  