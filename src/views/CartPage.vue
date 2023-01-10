<script>
import { RouterLink } from "vue-router";
</script>
<template>
  <!-- LOGIN PAGE -->
  <div class="mx-auto mt-24 border-2 border-black w-[400px] rounded-xl p-2 shadow-lg">
    <div class="text-center font-bold text-xl">
      <strong class="text-red-600">GAME</strong
      ><span class="font-semibold">RENT</span>
    </div>
    <div class="text-xs font-semibold text-center pb-1">CART</div>
    <div class="text-center font-bold text-neutral-700">user@mail.com</div>
    <div class="border-t-2 border-black"></div>

    <div class="mb-2">
      <div class="rounded-lg font-bold">CONSOLE</div> 
      <div class="text-sm flex justify-between px-2">
          <div>
              <p>PS4</p>
          </div>
          <div>
              <p>Rp 100.000</p>
          </div>
      </div>
    </div>
    <div class="border-t-2 border-black"></div>

    <div class="mb-2">
      <div class="rounded-lg font-bold">GAMES</div>
      <div class="text-sm flex justify-between px-2">
          <div>
              <p>FIFA2022</p>
              <p>PES2022</p>
              <p>CALL OF DUTY: WARFARE</p>
          </div>
          <div>
              <p>Rp 50.000</p>
              <p>Rp 50.000</p>
              <p>Rp 50.000</p>
          </div>
      </div>
    </div>
    <div class="border-t-2 border-black"></div>
    <div class="flex justify-between p-1">
      <div class="rounded-lg font-bold">TOTAL PRICE</div>
      <div>Rp 250.000</div>
    </div>

    <div class="mt-4">
        <button
          type="submit"
          class="rounded-xl w-full px-3 py-2  bg-green-700 tracking-wider text-white hover:-translate-y-1 hover:bg-green-600"
        >
          <strong>Checkout</strong>
        </button>
      </div>
  </div>
  
</template>
