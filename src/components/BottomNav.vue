<script setup></script>

<template>
  <div
    class="flex flex-row justify-around md:justify-center w-screen fixed top-full -translate-y-full h-16 bg-white border rounded-t-xl shadow-2xl md:px-80"
  >
    <div class="m-auto text-xl">
      <router-link :to="{ name: 'BurgerPrices' }">
        <i class="fa-solid fa-burger"></i>
      </router-link>
    </div>

    <div class="m-auto text-xl">
      <router-link :to="{ name: 'CountryDetails' }">
        <i class="fa-sharp fa-solid fa-flag"></i>
      </router-link>
    </div>

    <div class="m-auto text-xl">
      <router-link :to="{ name: 'WorkingTimes' }">
        <i class="fa-solid fa-clock"></i>
      </router-link>
    </div>

    <div class="m-auto text-[1.3rem]">
      <router-link :to="{ name: 'About' }">
        <i class="fa-solid fa-circle-info"></i>
      </router-link>
    </div>
  </div>
</template>
