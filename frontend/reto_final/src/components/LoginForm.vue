<script setup></script>
<template>
  <form class="flex flex-col items-center">
    <!-- Center the content -->
    <div class="w-1/3 mb-4 px-2">
      <label class="block mb-2 text-sm" for="pretext-input">Email</label>

      <div class="flex w-full">
        <div
          class="bg-primary flex items-center px-4 py-2 border border-r-0 rounded-l text-sm font-medium text-white select-none"
        >
          <svg
            class="w-7 h-6 text-grey-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div class="flex-1">
          <input
            id="pretext-input"
            class="w-full border px-4 py-2 rounded-r focus:border-blue-500 focus:shadow-outline outline-none"
            type="text"
            placeholder="jhondoe@gmail.com"
          />
        </div>
      </div>
    </div>
    <div class="w-1/3 mb-4 px-2">
      <label class="block mb-2 text-sm" for="pretext-input">Contraseña</label>

      <div class="flex w-full">
        <div
          class="bg-primary flex items-center px-4 py-2 border border-r-0 rounded-l text-sm font-medium text-gray-800 select-none"
        >
          <svg
            class="w-7 h-6 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="8" cy="15" r="4" />
            <line x1="10.85" y1="12.15" x2="19" y2="4" />
            <line x1="18" y1="5" x2="20" y2="7" />
            <line x1="15" y1="8" x2="17" y2="10" />
          </svg>
        </div>
        <div class="flex-1">
          <input
            id="pretext-input"
            class="w-full border px-4 py-2 rounded-r focus:border-blue-500 focus:shadow-outline outline-none"
            type="password"
            placeholder="***"
          />
        </div>
      </div>
    </div>

    <button
      type="submit"
      class="h-10 w-1/3 px-4 py-1 my-4 text-xs rounded-full text-white bg-primary focus:outline-none hover:bg-resaltar"
    >
      Login
    </button>
    <a
      href="#"
      class="h-10 w-1/3 px-4 py-1 text-xs flex justify-center items-center rounded-full bg-white hover:bg-gray-300 text-primary"
        >
      <p class="text-sm">
        ¿Olvidaste tu contraseña?
      </p>
    </a>
  </form>
</template>
