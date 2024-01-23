<template>
  <div class="flex flex-row bg-gray-700 h-full" >
    <NavbarAdmin activeNavAdmin="Usuarios"/>
    <UsuariosMain />
  </div>
</template>

<script setup>
import NavbarAdmin from "@components/AdminNavBar.vue";
import UsuariosMain from "@components/AdminUsuariosMain.vue";
</script>
