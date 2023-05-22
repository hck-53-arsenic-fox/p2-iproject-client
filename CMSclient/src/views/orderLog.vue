<script>
import { mapActions, mapState } from "pinia";
import { useFetchStore } from "../stores/fetchData";
import OrderLogRow from "../components/orderLogRow.vue";
export default {
  components: {
    OrderLogRow,
  },
  computed: {
    ...mapState(useFetchStore, ['allOrders']),
  },
  methods: {
    ...mapActions(useFetchStore, ["fetchAllOrders"]),
  },
  created() {
    this.fetchAllOrders();
  },
};
</script>

<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="fontstyle">Our Customer Data</h1>
      </div>
    </div>
  </div>
  <div class="container text-center">
    <table class="table table-secondary table-hover overflow-auto">
      <thead>
        <tr>
          <th>ID Number</th>
          <th>Name</th>
          <!-- <th>Brand</th> -->
          <th>Service Name</th>
          <th>Order status</th>
          <th>Order Date</th>
          <th>Estimated Date</th>
          <th>Complete Date</th>
          <th>Revenue</th>
          <th>Order Detail</th>
        </tr>
      </thead>
      <tbody>
        <OrderLogRow
          v-for="(el, i) in allOrders"
          :key="el.id"
          :el="el"
          :i="i"
        />
      </tbody>
    </table>
  </div>
</template>
