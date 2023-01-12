<script>
import { mapActions } from 'pinia';
import { useGameStore } from '../stores/game';

export default {
  props: ['console'],
  methods : {
    ...mapActions(useGameStore, ['getConsoleId'])
  }
}
</script>

<template>
  <!-- CONSOLE CARD -->
  <div
    class="shadow-lg bg-neutral-50-50 p-4 border-black w-fit rounded-xl hover:-translate-y-2 hover:border-neutral-700 min-h-[200px] hover:ring-2 hover:ring-neutral-500"
  >
    <div class="mx-auto w-fit min-h-[200px]">
      <img :src="console.imageUrl" alt="" width="200" />
    </div>
    <div class="text-center mt-4 font-bold text-xl">{{console.name}}</div>
    <div class="mt-2 mx-auto w-fit">
      <button
        @click.prevent="getConsoleId(console)"
        class="rounded-xl w-[280px] px-3 py-2 bg-red-600 tracking-wider text-white hover:bg-red-800"
      >
        <strong>Rp {{console.rent_price.toLocaleString()}} /DAY</strong>
      </button>
    </div>
  </div>
  <!-- END CARD -->
</template>
