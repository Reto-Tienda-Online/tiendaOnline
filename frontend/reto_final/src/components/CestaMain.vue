<script setup></script>

<template>
  <main class="flex xl:flex-row justify-center sm:flex-col w-full">
    <div class="text-white w-[745px] mx-4">
      <h2 class="text-xl my-4">Cesta</h2>
      <div
        class="flex flex-row justify-around bg-[#1f1f1f] w-full px-5 py-5 rounded-md"
      >
        <a
          href="/es/15626-comprar-new-cycle-pc-juego-steam-europe/"
          class="cover"
          ><picture
            ><img
              data-src="https://gaming-cdn.com/images/products/15626/250x143/15626-cover.jpg?v=1705664767"
              alt="New Cycle"
              src="https://gaming-cdn.com/images/products/15626/250x143/15626-cover.jpg?v=1705664767"
              loading="lazy" /></picture
        ></a>
        <div class="flex flex-col text-md">
          <div class="name">
            <!--Aqui ira el icono de-->
            <div class="platform platform-steam">
              <div class="icon-s icon-steam"></div>
            </div>
            <span title="New Cycle - Europe" class="font-bold text-lg"
              >New Cycle - Europe</span
            >
          </div>
          <div class="text-sm text-gray-300">Steam</div>
          <!--Delete icon-->
          <div class="text-sm py-6 text-gray-300">
            <a href="" class="deleteItem"
              ><font-awesome-icon icon="trash" />|
            </a>
            <a href="" class="moveToWishlist">Mover a la lista de deseos</a>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center">
          <div class="price mx-2">17.19€</div>
          <select class="bg-gray-50 py-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-max="10">
            <option value="0" disabled="disabled">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <!---->
      </div>
    </div>
    <div class="text-white w-[395px] mx-4">
      <h2 class="text-xl my-4">Resumen</h2>
      <div
        class="flex flex-col justify-center w-full bg-[#1f1f1f] px-5 py-5 rounded-md"
      >
        <div class="flex justify-between">
          <span>Precio oficial</span> <span>29.99€</span>
        </div>
        <div class="flex justify-between">
          <span>Descuento</span> <span>-12.80€</span>
        </div>
        <div class="flex justify-between font-bold text-2xl my-3">
          <span>Subtotal</span> <span>17.19€</span>
        </div>
        <a
          href="https://www.instant-gaming.com/es/pagos/"
          class="bg-resaltar flex justify-center rounded-lg px-2 py-4 my-5 font-bold"
        >
          Proceder con el pago ></a
        >
        <div class="flex flex-row items-center justify-center">
            <span class="h-[0.5px] w-full bg-gray-300"></span>
          <span class="flex justify-center my-3 text-gray-300">o</span>
                      <span class="h-[0.5px] w-full bg-gray-300"></span>
        </div>

        <a href="/" class="flex justify-center text-md text-gray-300">
           Continuar comprando
        </a>
      </div>
    </div>
  </main>
</template>
