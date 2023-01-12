<script>
import { mapActions, mapState } from "pinia";
import {useFetchStore} from "../stores/fetchData"
import myOrderHistoryRow from "../components/myOrderHistoryRow.vue";

export default {
  components: {
    myOrderHistoryRow,
  },
  computed: {
    ...mapState(useFetchStore, ["myOrders"]),
  },
  methods: {
    ...mapActions(useFetchStore, ['fetchMyOrders']),
  },
  created() {
    this.fetchMyOrders();
  },
};
</script>

<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="fontstyle">My Order Story</h1>
      </div>
    </div>
  </div>
  <div class="container text-center">
    <table class="table table-secondary table-hover overflow-auto">
      <thead>
        <tr>
          <th class="col">#</th>
          <th scope="col">Order ID Number</th>
          <th scope="col">Brand</th>
          <th scope="col">Service Name</th>
          <th scope="col">Order Date</th>
          <th scope="col">Estimated Complete Date</th>
          <th scope="col">Order status</th>
          <th scope="col">Order Complete Date</th>
          <th scope="col">Order Detail</th>
        </tr>
      </thead>
      <tbody>
        <myOrderHistoryRow v-for="el,i in myOrders" :key="el.id" :el="el" :i="i"/>
      </tbody>
    </table>
  </div>
</template>
