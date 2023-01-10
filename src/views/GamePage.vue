<script>
import GameCard from "../components/GameCard.vue";
export default {
  components: { GameCard },
};
</script>

<template>
  <section class="px-12 py-4 mt-6">
    <div class="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search Game"
        class="rounded-xl w-[200px] px-2 py-1 appearance-none border-[3px] border-neutral-900 focus:border-red-500 focus:outline-none placeholder:tracking-wider tracking-wider"
      />
      <button class="bg-red-600 rounded-xl px-4 py-1.5 text-white font-semibold">
        Search
      </button>
    </div>
    <div class="grid grid-cols-6 gap-8 w-fit mx-auto mt-8">
      <!-- GAME CARD -->
      <GameCard v-for="a in 20" />
    </div>
  </section>
</template>
