<template>
  <div class="flex flex-row bg-gray-700 h-full" >
    <NavbarAdmin activeNavAdmin="Home" />
    <AdminMain />
  </div>
</template>

<script setup>
import NavbarAdmin from "@components/AdminNavBar.vue";
import AdminMain from "@components/AdminMain.vue";
</script>

