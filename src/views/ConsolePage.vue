<script>
import { mapActions, mapState } from "pinia";
import ConsoleCard from "../components/ConsoleCard.vue";
import { useGameStore } from "../stores/game";
export default {
  components: { ConsoleCard },
  computed: {
    ...mapState(useGameStore, ['console'])
  },
  methods: {
    ...mapActions(useGameStore, ['fetchConsole'])
  },
  created() {
    this.fetchConsole()
  }
};
</script>

<template>
  <!-- CONSOLE PAGE -->
  <section class="px-12 py-4 mt-6">
    <div class="grid grid-cols-4 gap-8 w-fit mx-auto">
      <ConsoleCard v-for="item in console" :key="item.id" :console="item" />
    </div>
  </section>
</template>
