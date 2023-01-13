<script>
import { useFetchStore } from "../stores/fetchData";
import { useOrderStore } from "../stores/order";
import { mapActions } from "pinia";

export default {
  props: ["el"],
  methods: {
    ...mapActions(useFetchStore,['fetchOrderDetail']),
      async seeDetail(id) {
        this.fetchOrderDetail(id)
        this.$router.push(`/detail/${id}`)
      },
      ...mapActions(useOrderStore,['paymentMidtrans']),
      async pay(id){
        this.paymentMidtrans(id)
      }
  }
};
</script>

<template>
  <tr>
    <td>{{ el.orderIdNumber }}</td>
    <td>{{ el.Service.name }}</td>
    <td>{{ el.createdAt }}</td>
    <td>{{ el.estimatedDate }}</td>
    <td>{{ el.status }}
        <button
        v-if="el.status === 'Waiting for Payment'"
          @click.prevent="pay(el.id)"
          class="btn btn-outline-success btn-block btn-sm col-10 border border-secondary text-dark"
        >
          Pay
        </button>
    </td>
    <td>{{ el.completedDate }}</td>
    <td>
        <button
          @click.prevent="seeDetail(el.id)"
          class="btn btn-outline-secondary btn-block btn-sm col-10 border border-secondary text-dark"
        >
          Check Detail
        </button>
    </td>
  </tr>
</template>
