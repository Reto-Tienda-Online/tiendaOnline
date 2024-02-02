<script setup>
defineProps({
  comentario: Object,
  required: true,
});
</script>

<template>
  <!-- component -->
  <div class="bg-background text-white rounded-xl mt-5">
    <div class="flex flex-row align-middle pt-5 ml-5 rounded-xl">
      <div
        class="w-14 h-14 bg-resaltar rounded-full flex items-center justify-center font-bold text-white"
      >
        LOGO
      </div>
      <h1
        class="ml-5 text-center text-lg font-semibold hover:underline cursor-pointer"
      >
        {{ comentario.resena }}
      </h1>
    </div>
    <div class="p-5">
      <div class="flex mt-2">
        <span>{{ "⭐".repeat(comentario.valoracion) }}</span>
      </div>
      <p class="mt-4 text-md">{{ comentario.contenido }}</p>
      <div class="flex justify-between items-center">
        <div class="mt-4 flex items-center space-x-4 py-6">
          <div class="">
            <font-awesome-icon icon="user" />
          </div>
          <div class="ml-5 text-sm font-semibold">{{ comentario.id_usuario }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
