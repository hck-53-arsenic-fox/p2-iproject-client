<script>
import { useAppStore } from "@/stores/app";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    ...mapActions(useAppStore, ["getAllWallets"]),
  },
  computed: {
    ...mapState(useAppStore, ["wallets"]),
  },
  mounted() {
    this.getAllWallets();
  },
};
</script>

<template>
  <div>
    <div class="row">
      <div class="col-12 mb-4">
        <h1>Your Wallets</h1>
      </div>
      <div class="row">
        <div v-for="wallet of wallets" v-bind:key="wallet.id" class="col-3 m-2">
          <a href="#"
            ><div class="card text-dark">
              <div class="card-body">
                <h5 class="card-title">Wallet ID: {{ wallet.id }}</h5>
                <span class="card-title">Wallet name: {{ wallet.name }}</span>
              </div>
            </div></a
          >
        </div>
      </div>
    </div>
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
