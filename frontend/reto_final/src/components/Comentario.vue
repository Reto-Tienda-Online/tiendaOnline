<script setup>
defineProps({
  comentario: Object,
  required: true,
});
</script>

<template>
  <!-- component -->
  <div class="bg-background text-white rounded-xl mt-5 mb-10">
    <div class="flex flex-row align-middle pt-5 ml-5 rounded-xl">
      <div
        class="w-14 h-14 bg-resaltar rounded-full flex items-center justify-center font-bold text-white"
      >
        {{ comentario.nombre_usuario.slice(0, 2).toUpperCase() }}
      </div>
      <h1
        class="ml-5 text-center text-lg font-semibold hover:underline cursor-pointer"
      >
        {{ comentario.titulo }}
      </h1>
    </div>
    <div class="p-5">
      <div class="flex justify-between items-center -mt-8">
        <div class="mt-0 flex items-center space-x-4 py-6">
          <div class="mt-0">
            <font-awesome-icon icon="user" />
          </div>
          <div class="ml-5 text-sm font-semibold">
            {{ comentario.nombre_usuario }}
          </div>
        </div>
      </div>
      <div class="flex -mt-2">
        <span>{{ "⭐".repeat(comentario.valoracion) }}</span>
      </div>
      <p class="mt-4 text-md">{{ comentario.comentario }}</p>
    </div>
  </div>
</template>
