<script>
import { useAppStore } from "@/stores/app";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      from: "IDR",
      to: "USD",
      amount: 20000,
    };
  },
  components: {},
  methods: {
    ...mapActions(useAppStore, ["fixerioConvertCurrency"]),

    handleSubmitButton() {
      return this.fixerioConvertCurrency(this.from, this.to, this.amount);
    },
  },
  computed: {
    ...mapState(useAppStore, ["conversionResult"]),
  },
};
</script>

<template>
  <div class="mb-4">
    <h1>Currency Converter</h1>
    <span>https://freecurrencyapi.com/docs</span>
  </div>
  <div>
    <form
      @submit.prevent="handleSubmitButton"
      class="bg-white p-4 w-50 rounded"
    >
      <div class="form-group">
        <label for="from">From:</label>
        <input v-model="from" class="form-control" disabled />
      </div>
      <div class="form-group">
        <label for="to">To:</label>
        <input v-model="to" class="form-control" />
      </div>
      <div class="form-group">
        <label for="amount">Amount:</label>
        <input v-model.number="amount" type="number" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary mt-4">Convert</button>
      <div class="mt-4 text-dark">
        Result {{ this.conversionResult }} {{ this.to }}
      </div>
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
