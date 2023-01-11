<script>
import TransactionForm from "../components/TransactionForm.vue";

export default {
  data() {
    return {};
  },
  props: [],
  components: {
    TransactionForm,
  },
};
</script>

<template>
  <section class="my-4" id="form-section">
    <div class="container-fluid">
      <div class="container px-4">
        <div class="row">
          <div class="ps-0 text-light">
            <h2>Create Transaction</h2>
          </div>
          <div class="card w-100 m-auto p-3 m-4">
            <div class="d-grid col">
              <TransactionForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
