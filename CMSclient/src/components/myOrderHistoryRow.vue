<script>
import { useFetchStore } from "../stores/fetchData";
import { mapActions } from "pinia";

export default {
  props: ["el", "i"],
  methods: {
    ...mapActions(useFetchStore,['fetchOrderDetail']),
      async seeDetail(id) {
        this.fetchOrderDetail(id)
      }
  }
};
</script>

<template>
  <tr>
    <th scope="row">{{ i + 1 }}</th>
    <td>{{ el.orderIdNumber }}</td>
    <td>{{ el.shoesBrand }}</td>
    <td>{{ el.Service.name }}</td>
    <td>{{ el.createdAt }}</td>
    <td>{{ el.estimatedDate }}</td>
    <td>{{ el.status }}</td>
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
