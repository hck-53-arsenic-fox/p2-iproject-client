<script>
import { RouterLink, RouterView } from 'vue-router'
import { useResortStore } from '../stores/resort'
import { mapState, mapActions } from 'pinia'


export default {
  name: 'resortCard',
  props: ['resort'],
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
  <div
    class="my-6 p-5 w-4/5 bg-white flex flex-col rounded shadow-lg rounded-3xl items-center md:flex-row bg-opacity-80">

    <!-- left part -->
    <div class="justify-center">
      <img :src="resort.imageUrl" class="rounded object-cover duration-200 w-60 hover:scale-105">
    </div>

    <!-- right part -->
    <div class=" px-5 mx-5 py-5 flex-col justify-center md:py-0 w-full">
      <div class="font-bold text-xl mb-2">{{ resort.title }}</div>
      <p class="text-gray-700 text-base py-2">
        {{ resort.description }}
      </p>
      <p class="py-2">
        {{ resort.price }}
      </p>
      <p class="text-gray-700 py-2">
        {{ resort.location }}
      </p>
    </div>

    <div class="p-3 self-end">
      <button class="bg-[#F68247] hover:bg-[#F56D29] text-white font-bold p-4 rounded-xl">
        View Detail
      </button>
    </div>
  </div>
</template>


