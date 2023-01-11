<script>
import { mapActions } from "pinia";
import { useGameStore } from "../stores/game";

export default {
  props: ["game"],
  methods: {
    ...mapActions(useGameStore, ["getGameId"]),
  },
};
</script>

<template>
  <div
    class="max-w-sm rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 pb-2 relative hover:ring-2 hover:ring-red-400"
  >
    <img class="w-full" :src="game.imageUrl" alt="Sunset in the mountains" />
    <div class="p-2 text-center">
      <div class="font-bold mb-2">{{ game.name }}</div>
      <div class="font-bold mb-2">Rp {{ game.price.toLocaleString() }}</div>
      <div class="text-xs flex gap-2 w-fit mx-auto">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Xbox_Logo.svg/1200px-Xbox_Logo.svg.png"
            alt="xbox"
            width="20"
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png"
            alt="xbox"
            width="25"
          />
        </div>
      </div>
    </div>
    <div
      class="absolute right-0 -top-4 text-center bg-yellow-500 rounded-bl-xl hover:bg-yellow-400"
    >
      <button
        @click.prevent="getGameId(game)"
        class="text-6xl font-bold text-white hover:scale-110 cursor-pointer"
      >
        +
      </button>
    </div>
  </div>
</template>
