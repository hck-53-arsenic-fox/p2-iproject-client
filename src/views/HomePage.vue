<script>
import CartPage from "./CartPage.vue";
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";
import { useGameStore } from "../stores/game";
export default {
  data() {
    return {
      punchline: false,
      more:true
    }
  },
  components: { CartPage },
  computed: {
    ...mapState(useUserStore, ['isLogin', 'jokes'])
  },
  methods: {
    ...mapActions(useGameStore, ['rentGames']),
    ...mapActions(useUserStore, ['dadJokes']),
    goToPage() {
        if(this.isLogin) {
            this.$router.push({name: 'consolePage'}) 
        } else {
            this.$router.push({name: 'loginPage'})
        }
    },
    showPunchilne() {
      this.punchline = true
      this.more = false
    },
    moreJokes() {
      this.dadJokes()
      this.more = true
      this.punchline = false
    }
  },
  created() {
    this.dadJokes()
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
      <div class="text-xl mt-8 italic max-w-[400px]">
        {{jokes.setup}}
        <div>
          <button v-if="jokes.setup" @click.prevent="showPunchilne" class="text-red-500 hover:text-red-600">What ?</button>
        </div>
        <div v-if="punchline">
          {{ jokes.punchline }}
        </div>
        <div>
          <button v-if="!more" @click.prevent="moreJokes" class="text-red-500 hover:text-red-600">Need More ?</button>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <img src="../assets/img/ps4.webp" alt="" width="500" />
    </div>
  </div>
</template>
