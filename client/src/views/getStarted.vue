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
    <div class="relative w-full h-full flex flex-col bg-[#EBF1FF0] space-y-2 md:flex-row space-y-0 z-0">

      <!-- left part -->
      <div class="flex basis-1/3 bg-white justify-center flex-col">


        <!-- Welcoming text -->
        <div class="m-5 p-7 text-left">
          <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Take a Break
          </h1>
          <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on
            markets
            where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>

        <div class="py-6 px-0 m-4 self-center">
          <button class="bg-[#F68247] hover:bg-[#F56D29] text-white font-bold py-5 px-10 rounded-xl">
            Button
          </button>
        </div>
      </div>


      <!-- right part -->
      <div class="flex basis-2/3 bg-white justify-center align-center flex-col">

        <!-- image -->
        <div class="align-center mr-5">
          <img src="./assests/10811.jpg" alt="">
        </div>

      </div>

    </div>

  </section>

</template>


