<script>
import { useAppStore } from "@/stores/app";
import { mapState, mapActions } from "pinia";

export default {
  name: "TransactionForm",
  methods: {
    ...mapActions(useAppStore, [
      "handleCreateTransaction",
      "getAllTransactions",
      "getAllWallets",
      "getAllCategories",
    ]),

    handleFormSubmit() {
      return this.handleCreateTransaction({
        name: this.name,
        amount: this.amount,
        type: this.type,
        transactionDateTime: this.transactionDateTime,
        CategoryId: this.CategoryId,
        WalletId: this.WalletId,
      });
    },
  },
  computed: {
    ...mapState(useAppStore, ["categories", "wallets"]),
  },
  data() {
    return {
      name: "",
      amount: 0,
      type: "",
      transactionDateTime: "",
      CategoryId: 0,
      WalletId: 0,
    };
  },
  mounted() {
    this.getAllTransactions();
    this.getAllWallets();
    this.getAllCategories();
  },
};
</script>

<template>
  <form @submit.prevent="handleFormSubmit" class="form text-dark">
    <div class="form-group">
      <label for="name">Transaction Name</label>
      <input class="form-control" id="name" v-model="name" />
    </div>
    <div class="form-group">
      <label for="amount">Amount</label>
      <input class="form-control" id="amount" v-model="amount" />
    </div>
    <div class="form-group">
      <label for="type">Type</label>
      <select v-model="type" class="form-select">
        <option disabled value="">Choose transaction type</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
    <div class="form-group">
      <label for="transactionDateTime">Transaction Date And Time</label>
      <input
        class="form-control"
        id="transactionDateTime"
        v-model="transactionDateTime"
      />
    </div>
    <div class="form-group">
      <label for="category">Category</label>
      <select v-model="CategoryId" class="form-select">
        <option disabled value="">Select</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="wallet">Wallet</label>
      <select v-model="WalletId" class="form-select">
        <option disabled value="">Select</option>
        <option v-for="wallet in wallets" :key="wallet.id" :value="wallet.id">
          {{ wallet.name }}
        </option>
      </select>
    </div>
    <button type="submit" class="mt-3 btn btn-success">Submit</button>
  </form>
</template>
