<script>
import { useAppStore } from "@/stores/app";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    ...mapActions(useAppStore, ["getAllTransactions", "checkAuth"]),
  },
  computed: {
    ...mapState(useAppStore, ["transactions"]),

    categoriesFromTransactions() {
      const arrayOfCategories =
        this.transactions.length > 0
          ? this.transactions.map((transaction) => {
              return transaction.Category?.name;
            })
          : [];
      const finalResult = arrayOfCategories.reduce((acc, curr) => {
        if (typeof acc[curr] == "undefined") {
          acc[curr] = 1;
        } else {
          acc[curr] += 1;
        }
        return acc;
      }, {});
      return finalResult;
    },

    formattedAmount() {
      return this.transactions.amount.length > 0
        ? this.transactions.amount.map((amount) => {
            return amount.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            });
          })
        : [];
    },
  },
  mounted() {
    this.getAllTransactions();
    this.checkAuth();
  },
};
</script>

<template>
  <div class="card text-dark p-4 mb-4">
    <div class="col-12 mb-4">
      <h1>Your Transactions</h1>
    </div>
    <div class="col-4 p-4">
      <button
        @click="this.$router.push('/transactions-create')"
        class="btn btn-primary"
      >
        Create new Transaction
      </button>
    </div>
    <div v-if="transactions.length > 0" class="row">
      <div class="col-12 pb-4">
        <pie-chart :data="categoriesFromTransactions"></pie-chart>
      </div>
      <div class="col-12 card">
        <table class="table table-light">
          <thead>
            <tr>
              <th class="col-2">Transaction ID</th>
              <th>Transaction Name</th>
              <th>Transaction Amount</th>
              <th>Date Time</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction of transactions" v-bind:key="transaction.id">
              <td>{{ transaction.id }}</td>
              <td>{{ transaction.name }}</td>
              <td>Rp.{{ transaction.amount }}</td>
              <td>{{ transaction.transactionDateTime }}</td>
              <td>{{ transaction.Category?.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else>
      <h3 class="text-center">No Transactions found</h3>
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
