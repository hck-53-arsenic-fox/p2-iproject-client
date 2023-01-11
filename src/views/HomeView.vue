<script>
import GameCard from "../components/GameCard.vue";
import { mapState, mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  components: {
    GameCard,
  },
  computed: {
    ...mapState(useCounterStore, ["games", "count"]),
    ...mapWritableState(useCounterStore, ["page_size"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchGames"]),
    showMore() {
      this.page_size += 4;
      this.fetchGames();
    },
  },
  created() {
    this.fetchGames();
  },
};
</script>

<template>
  <div class="container text-center my-4">
    <div class="row row-cols-1 row-cols-md-2 g-4 mb-4">
      <GameCard v-for="game in games" :game="game" />
    </div>
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <div class="card">
          <div class="card-body p-1">
            Showing {{ page_size }} out of {{ count }} games.
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <button type="button" class="btn btn-outline-primary" @click="showMore">
        Show More
      </button>
    </div>
  </div>
</template>
