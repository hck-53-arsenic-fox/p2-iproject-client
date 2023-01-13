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
          <th>ID Number</th>
          <th>Service Name</th>
          <th>Order Date</th>
          <th>Complete Date</th>
          <th>Order status</th>
          <th>Complete Date</th>
          <th>Order Detail</th>
        </tr>
      </thead>
      <tbody>
        <myOrderHistoryRow v-for="el,i in myOrders" :key="el.id" :el="el" :i="i"/>
      </tbody>
    </table>
  </div>
</template>
