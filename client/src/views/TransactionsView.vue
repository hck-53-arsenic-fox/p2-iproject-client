<script>
import { useAppStore } from "@/stores/app";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    ...mapActions(useAppStore, ["getAllTransactions"]),
  },
  computed: {
    ...mapState(useAppStore, ["transactions"]),

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
  },
};
</script>

<template>
  <div>
    <div class="row">
      <div class="col-12 mb-4">
        <h1>Your Transactions</h1>
      </div>
      <!-- bootstrap button  -->
      <div class="col-12 card">
        <div class="col-4 p-4">
          <button
            @click="this.$router.push('/transactions-create')"
            class="btn btn-primary"
          >
            Create new Transaction
          </button>
        </div>
        <table class="table table-light">
          <thead>
            <tr>
              <th class="col-2">Transaction ID</th>
              <th>Transaction Name</th>
              <th>Transaction Amount</th>
              <th>Date Time</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(transaction, index) of transactions"
              v-bind:key="transaction.id"
            >
              <td>{{ transaction.id }}</td>
              <td>{{ transaction.name }}</td>
              <td>Rp.{{ transaction.amount }}</td>
              <!-- <td>{{ this.formattedAmount?.[index] || "-" }}</td> -->
              <td>{{ transaction.transactionDateTime }}</td>
            </tr>
          </tbody>
        </table>
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
