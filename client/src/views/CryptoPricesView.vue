<script>
import { useAppStore } from "@/stores/app";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    ...mapActions(useAppStore, ["getCMCWraperAPI"]),

    handleSubmitButton() {
      return this.getCMCWraperAPI();
    },
  },
  computed: {
    ...mapState(useAppStore, ["cmcResponse"]),
  },
  mounted() {
    this.getCMCWraperAPI();
  },
};
</script>

<template>
  <div class="mb-4">
    <h1>Cryptocurrency Prices</h1>
    <p>
      <a
        href="https://coinmarketcap.com/api/documentation/v1/#section/Quick-Start-Guide"
        >https://coinmarketcap.com/api</a
      >
    </p>
  </div>
  <div>
    <form
      @submit.prevent="handleSubmitButton"
      class="bg-white p-4 w-50 rounded text-dark"
    >
      <ol>
        <li v-for="item in cmcResponse" :key="item.id">
          {{ item.name }} - ${{ item?.quote?.USD?.price }}
        </li>
      </ol>
    </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: left;
  }
}
</style>
