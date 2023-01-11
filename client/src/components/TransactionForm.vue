<script>
export default {
  name: "TransactionForm",
  data() {
    return {
      name: "",
      amount: 0,
      type: "",
      transactionDateAndTime: "",
      CategoryId: 0,
      WalletId: 0,
      categories: [],
      wallets: [],
    };
  },
  /*  created() {
    if (this.page === "create") {
      // if it is a create form, clear all the fields first
      this.name = "";
      this.amount = 0;
      this.type = "";
      this.transactionDateAndTime = "";
      this.CategoryId = 0;
      this.WalletId = 0;
    } else {
      console.table(this.postObject);
      // if it is an update form, initialize the fields with the values of the postObject prop
      this.name = this.postObject.name;
      this.amount = this.postObject.amount;
      this.type = this.postObject.type;
      this.transactionDateAndTime = this.postObject.transactionDateAndTime;
      this.CategoryId = this.postObject.CategoryId;
      this.WalletId = this.postObject.WalletId;
    }
  }, */
};
</script>

<template>
  <form
    @submit.prevent="
      $emit('submitTransactionForm', postObject.id, {
        name,
        amount,
        type,
        transactionDateAndTime,
        CategoryId,
        WalletId,
      })
    "
    class="form text-dark"
  >
    <div class="form-group">
      <label for="title">Transaction Title</label>
      <input class="form-control" id="title" v-model="title" />
    </div>
    <div class="form-group">
      <label for="name">Name</label>
      <textarea
        rows="10"
        class="form-control"
        id="content"
        v-model="name"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="amount">Amount</label>
      <input class="form-control" id="amount" v-model="amount" />
    </div>
    <div class="form-group">
      <label for="type">Type</label>
      <input class="form-control" id="type" v-model="type" />
    </div>
    <div class="form-group">
      <label for="transactionDateAndTime">Transaction Date And Time</label>
      <input
        class="form-control"
        id="transactionDateAndTime"
        v-model="transactionDateAndTime"
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
