<script setup></script>
<template>
  <main class="text-white w-full h-full flex justify-center">
    <form class="flex flex-col w-[745px]">
      <h2 class="text-xl font-bold my-3">Dirección de facturación</h2>
      <div class="flex flex-row justify-between w-full">
        <input
          class="bg-[#272727] rounded-md w-full border-2 py-3 px-2 border-gray-400"
          type="text"
          placeholder="Nombre comleto"
        />
        <input
          class="bg-[#272727] rounded-md w-full border-2 ml-4 py-3 px-2 border-gray-400"
          type="text"
          placeholder="Dirección de la facturación"
        />
      </div>

      <select
        class="bg-[#272727] rounded-md border-2 my-5 py-3 px-2 border-gray-400 w-full"
      >
        <option>Singapore</option>
        <option>Luxembourg</option>
        <option>Italy</option>
        <option>Germany</option>
        <option>USA</option>
        <option>Canada</option>
        <option>Brazil</option>
        <option>UAE</option>
      </select>
      <h2 class="text-xl font-bold my-3 focus">Métodos de pago</h2>
      <div id="payment-method-93" class="rounded-md bg-[#272727] py-7 px-5">
        <div
          class="flex flex-row hover:border-resaltar active:border-resaltar focus:border-resaltar"
        >
          <input
            type="radio"
            name="payment-platform"
            value="PAYPAL"
            class="hidden"
          />
          <img
            class="rounded-lg w-22 h-20"
            src="https://brandemia.org/sites/default/files/sites/default/files/logo_paypal_principal.jpg"
            alt="Imagen de PayPal"
          />
          <div class="flex flex-col mx-5">
            <span class="font-bold"
              >Paypal<span class="text-gray-500">(+0.20€)</span></span
            >
            <div class="paypal-agreement-container">
              <label class="checkbox"
                ><input type="checkbox" name="paypal_save" checked="checked" />
                <span class="checkmark"></span>
                Guardar para tu próxima compra
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="" style="">
              <div class="paypal" style="display: none">
                <div class="">
                  <label
                    class=""
                    ><input type="radio" name="mp_ba" value="" />
                    <i class="icon-add icon-xxxs"></i> Usar una nueva cuenta
                  </label>
                </div>
              </div>
            </div>
          </div></label -->
    </form>
    <div class="w-[396px] mx-14">
      <input id="pluginsdata" type="hidden" name="pluginsdata" value="" />
      <input type="hidden" name="process" value="pay" />
      <input
        type="hidden"
        name="usid"
        value="1a99ccc3ce502635ed64a38aeeda80291ca362ad7ea7db61f3a1ae74c85f18ea"
      />
      <input type="hidden" name="ioBB" id="ioBB" />
      <h2 class="text-xl font-bold my-3">Resumen</h2>
      <div class="">
        <div class="bg-[#272727] py-8 px-7 rounded-lg">
          <div class="games">
            <div class="flex justify-between">
              <div class="flex flex-col">
                <span class="name"
                  ><span title="HumanitZ" class="font-bold text-lg"
                    >HumanitZ</span
                  ></span
                >
                <span class="text-xs"> Steam </span>
              </div>
              <span class="text-[#aeaeae]">7.76€</span>
            </div>
            <span class="h-[0.5px] bg-gray-200 w-full"></span>
          </div>
          <!-- <div class="payment-gift">
            <small
              ><div class="icon-gift icon-xxs"></div>
              Print your game as a gift after validating your purchase
            </small>
          </div> -->
        </div>
        <div class="bg-[#272727] py-8 px-8 my-7 rounded-lg">
          <div class="flex justify-between">
            <span>Costes de transacción:</span>
            <span class="text-[#aeaeae]">0.20€</span>
          </div>
          <div id="ig-vat" data-rate="21.00" class="flex justify-between my-2">
            <span >IVA (<span>21.00</span>%) :</span>
            <span class="text-[#aeaeae]"><span>1.63€</span></span>
          </div>
          <div class="flex justify-between font-bold text-xl my-4">
            <span class="texttotal">Total</span>
            <span class="subtotal">9.59€</span>
          </div>
          <div class="flex justify-center py-5 my-6 bg-resaltar rounded-lg">
            <button type="submit" class="button default">Pagar</button>
          </div>
        </div>
      </div>
      <label class="text-xs text-gray-200 text-pretty"
        >Haciendo clic en "Pagar" reconozco haber aceptado los
        <a class="underline" href="/es/terminos-y-condiciones/" target="_blank"
          >términos y condiciones</a
        >, y la
        <a class="underline" href="/es/politicas-de-privacidad/" target="_blank"
          >política de privacidad</a
        >.</label
      >
    </div>
  </main>
</template>
