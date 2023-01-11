<script>
import CartPage from "./CartPage.vue";
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";
import { useGameStore } from "../stores/game";
export default {
  components: { CartPage },
  computed: {
    ...mapState(useUserStore, ['isLogin' ])
  },
  methods: {
    ...mapActions(useGameStore, ['rentGames']),
    goToPage() {
        if(this.isLogin) {
            this.$router.push({name: 'consolePage'}) 
        } else {
            this.$router.push({name: 'loginPage'})
        }
    }
  }
};
</script>

<template>
  <div class="px-12 py-4 flex justify-around mt-2 items-center">
    <div class="text-7xl font-semibold w-[700px]">
      <p>
        Mau main
        <span class="font-bold hover:underline text-red-600">Game</span> apa
      </p>
      <p>hari ini?</p>
      <p>🎮🕹️</p>

      <button
        class="text-4xl bg-red-700 w-fit px-6 py-4 mt-6 text-center text-white rounded-full hover:bg-red-600 hover:shadow-lg hover:-translate-y-1"
      >
        <a @click.prevent="goToPage" href="">Pesan Sekarang</a>
      </button>
    </div>
    <div class="mt-8">
      <img src="../assets/img/ps4.webp" alt="" width="500" />
    </div>
  </div>
</template>
