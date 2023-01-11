<script>
import { RouterLink, RouterView } from 'vue-router'
import { useResortStore } from '../stores/resort'
import { mapState, mapActions } from 'pinia'


export default {
  name: 'getStarted',
  components: {

  },
  computed: {

  },
  methods: {

  },
  created() {

  }
}

</script>

<template>
  <section class="flex h-screen justify-center flex-col">
    <div class="relative w-full h-full flex flex-col bg-[#EBF1FF0] space-y-2 md:flex-row space-y-0 z-0 justify-center">

      <!-- left part -->
      <div class="flex bg-white justify-center flex-col p-5 basis-5/12">


        <!-- Welcoming text -->
        <div class="m-5 p-7 text-left">
          <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Take a Break
          </h1>
          <q class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            The best things in life are the people we love, the places we’ve been, and all the memories we’ve made
            along the way.</q>
        </div>

        <div class="py-3 m-5 p-7">
          <RouterLink v-if="isLogin" to="/resorts"
            class="bg-[#05B384] hover:bg-[#06D6A0] text-white font-bold py-5 px-10 rounded-xl">
            Get Started
          </RouterLink>
          <RouterLink v-if="!isLogin" to="/login"
            class="bg-[#05B384] hover:bg-[#06D6A0] text-white font-bold py-5 px-10 rounded-xl">
            Get Started
          </RouterLink>
        </div>
      </div>


      <!-- right part -->
      <div class="flex flex-col scale-[0.80] basis-7/12 ">

        <!-- image -->
        <img src="../assets/sunset.jpg" alt="" class="">

      </div>

    </div>

  </section>

</template>


