<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  props: ["game"],
  methods: {
    ...mapActions(useCounterStore, ["buyGame"]),
    buy() {
      this.buyGame(this.game.slug);
    },
  },
};
</script>

<template>
  <div class="col">
    <div class="card">
      <img :src="game.background_image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ game.name }}</h5>
        <p class="card-text"></p>
        <button type="button" class="btn btn-outline-primary mx-2" @click="buy">
          Buy
          <i class="bi bi-cart2"></i>
        </button>
        <button type="button" class="btn btn-outline-secondary mx-2">
          Details
          <i class="bi bi-file-richtext"></i>
        </button>
      </div>
    </div>
  </div>
</template>
