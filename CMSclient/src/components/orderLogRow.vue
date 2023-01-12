<script>
import { useFetchStore } from "../stores/fetchData";
import { mapActions } from "pinia";

export default {
  props: ["el", "i"],
  methods: {
    ...mapActions(useFetchStore, ["fetchOrderDetail"]),
    async seeDetail(id) {
      this.fetchOrderDetail(id);
      this.$router.push(`/detail/${id}`)
    },
    async update(id) {
        this.$router.push(`/update/${id}`)
    }
  },
};
</script>

<template>
  <tr>
    <th scope="row">{{ i + 1 }}</th>
    <td>{{ el.orderIdNumber }}</td>
    <td>{{ el.User.username }}</td>
    <td>{{ shoesBrand }}</td>
    <td>{{ el.Service.name }}</td>
    <td>
      {{ el.status }}
      <button
      @click.prevent="update(el.id)"
        class="btn btn-outline-secondary btn-block btn-sm col-10 border border-secondary text-dark mt-1"
        >Update</button
      >
    </td>
    <td>{{ el.createdAt }}</td>
    <td>{{ el.estimatedDate }}</td>
    <td>{{ el.completedDate }}</td>
    <td>{{ el.Service.price }}</td>
    <td>
      <Button
        @click.prevent="seeDetail(el.id)"
        class="btn btn-outline-secondary btn-block btn-sm col-10 border border-secondary text-dark"
        >Check Detail</Button
      >
    </td>
  </tr>
</template>
