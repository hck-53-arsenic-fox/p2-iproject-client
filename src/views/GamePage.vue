<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import GameCard from "../components/GameCard.vue";
import { useGameStore } from "../stores/game";
import { useUserStore } from "../stores/user";
export default {
  data() {
    return {
      page: 1,
      search: "",
    };
  },
  components: { GameCard },
  computed: {
    ...mapState(useGameStore, ["games"]),
    ...mapWritableState(useGameStore, ["query"]),
  },
  methods: {
    ...mapActions(useGameStore, ["fetchGames"]),
    nextPage() {
      this.page = this.page + 1;
      this.$router.replace({
        name: this.$route.name,
        query: { page: this.page },
      });
      this.query.page = this.page;
      this.fetchGames();
    },
    prevPage() {
      if (this.$route.query.page >= 1) {
        this.page = this.page - 1;
        this.$router.replace({
          name: this.$route.name,
          query: { page: this.page },
        });
        this.query.page = this.page;
        this.fetchGames();
      }
    },
    filterById(id) {
      this.query.platformId = id;
      this.query.page = this.$route.query.page;
      this.fetchGames();
    },
    searchGames() {
      console.log(this.search);
      this.$router.replace({
        name: this.$route.name,
        query: { page: this.page, search: this.search },
      });
      this.query.search = this.search
      this.fetchGames()
    },
  },
  created() {
    this.fetchGames();
  },
};
</script>

<template>
  <section class="px-12 py-4 mt-6">
    <div class="flex justify-between">
      <div class="flex items-center gap-2">
        <input
          v-model="search"
          @keyup="searchGames"
          type="text"
          placeholder="Search Game"
          class="rounded-xl w-[200px] px-2 py-1 appearance-none border-[3px] border-neutral-900 focus:border-red-500 focus:outline-none placeholder:tracking-wider tracking-wider"
        />
        <button
          class="bg-red-600 rounded-xl px-4 py-1.5 text-white font-semibold"
        >
          Search
        </button>
      </div>

      <div class="flex gap-4">
        <button
          v-if="this.$route.query.page >= 2"
          @click.prevent="prevPage"
          class="bg-blue-600 rounded-xl px-4 py-1.5 text-white font-semibold"
        >
          Prev
        </button>
        <button
          @click.prevent="nextPage"
          class="bg-blue-600 rounded-xl px-4 py-1.5 text-white font-semibold"
        >
          Next
        </button>
      </div>
    </div>
    <div class="mt-4 flex gap-4 items-center">
      <div class="font-bold">Filter By</div>
      <button
        @click.prevent="filterById(187)"
        class="bg-yellow-600 px-3 py-1 rounded-full text-white font-bold text-sm"
      >
        Play Station 5
      </button>
      <button
        @click.prevent="filterById(18)"
        class="bg-yellow-600 px-3 py-1 rounded-full text-white font-bold text-sm"
      >
        Play Station 4
      </button>
      <button
        @click.prevent="filterById(186)"
        class="bg-yellow-600 px-3 py-1 rounded-full text-white font-bold text-sm"
      >
        Xbox
      </button>
    </div>
    <div class="grid grid-cols-6 gap-8 w-fit mx-auto mt-4">
      <!-- GAME CARD -->
      <GameCard v-for="game in games" :key="game.id" :game="game" />
    </div>
  </section>
</template>
