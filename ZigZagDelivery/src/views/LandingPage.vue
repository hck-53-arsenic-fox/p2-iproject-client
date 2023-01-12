<script>
// import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import Login from "../components/Login.vue";

export default {
  components: {
    Login,
  },
  emits:['activatedMenu'],
  methods: {
    activatedMenu(section){
      this.$emit('activatedMenu', section)
    },
  }
};
</script>

<template>
  <div class="grid grid-cols-4 w-screen h-screen max-md:hidden bg-black">
    <Login @activatedMenu="activatedMenu" class=" bg-green-200 grid w-full h-full place-items-center"/>
    <!-- Carousel for screen larger than mobile -->
    <div class="col-span-3 h-full" id="relative">
      <div id="indicators-carousel" class="relative w-full h-full" data-carousel="slide">
        <div class="overflow-hidden relative h-full">
          <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="active">
            <div id="slide1" class="snap-center shrink-0 bg-amber-200 grid w-full h-full place-items-center text-8xl"> Slide 1 </div>
          </div>
          <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
            <div id="slide2" class="snap-center shrink-0 bg-blue-200 grid w-full h-full place-items-center text-8xl"> Slide 2 </div>
          </div>
          <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
            <div id="slide3" class="snap-center shrink-0 bg-orange-200 grid w-full h-full place-items-center text-8xl"> Slide 3 </div>
          </div>
        </div>
        <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          <button type="button" class="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>

        <!-- Previous / Next slide button -->
        <!-- <button type="button" class="-rotate-90 flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-screen cursor-pointer group focus:outline-none" data-carousel-prev="">
          <span class="mx-8 animate-bounce "><i class="fa-solid fa-chevron-up"></i></span>
        </button>
        <button type="button" class="rotate-90 flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-screen cursor-pointer group focus:outline-none" data-carousel-next="">
          <span class="mx-8 animate-bounce "><i class="fa-solid fa-chevron-up"></i></span>
        </button> -->
      </div>
    </div>
  </div>
      
  <div class="flex snap-x snap-mandatory w-screen h-screen mx:auto overflow-scroll lg:hidden">
    <div class="snap-center shrink-0 bg-amber-200 grid w-full h-full place-items-center text-8xl"> Slide 1 </div>
    <div class="snap-center shrink-0 bg-blue-200 grid w-full h-full place-items-center text-8xl"> Slide 2 </div>
    <div class="snap-center shrink-0 bg-orange-200 grid w-full h-full place-items-center text-8xl"> Slide 3 </div>
    <Login @activatedMenu="activatedMenu" class="snap-center shrink-0 bg-green-200 grid w-full h-full place-items-center"/>
  </div>
</template>