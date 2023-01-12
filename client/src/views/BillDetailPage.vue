<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  name: "BillDetailPage",
  components: {
    NavbarComponent,
  },
  computed: {
    ...mapState(useUserStore, ["userBill"]),
  },
  methods: {
    ...mapActions(useUserStore, ["getPayment", "fetchEachUserBill"]),
  },
  created() {
    this.fetchEachUserBill();
  },
};
</script>

<template>
  <NavbarComponent />
  <!-- My Bill -->
  <div class="container my-4">
    <h3 class="text-center my-4">My Bills</h3>
    <div class="row">
      <!-- MyBillCard -->
      <div
        v-for="myBill in userBill"
        :key="myBill.id"
        :myBill="myBill"
        class="col-4 mb-3"
      >
        <!-- {{ JSON.stringify(myBill) }} -->
        <!-- {{ myBill.User.image }} -->
        <div class="card p-3 rounded-3">
          <div class="row align-items-center">
            <div class="col-6">
              <img
                :src="myBill.User?.image"
                alt="logo"
                class="mx-auto d-block"
                style="width: 190px; height: 15vw; object-fit: cover"
              />
            </div>
            <div class="col-6">
              <h5 class="mb-2">
                <strong>{{ myBill.User.username }}</strong>
              </h5>
              <p class="mb-0">Description : {{ myBill.Bill.description }}</p>
              <p class="mb-0">Month: {{ myBill.Bill.month }}</p>
              <p class="mb-0">Amount: {{ myBill.Bill.amount }}</p>
              <button
                v-if="myBill.status === 'Active'"
                @click="getPayment(myBill.id)"
                class="btn btn-sm btn-primary mt-3"
              >
                Pay Bill
              </button>
              <button
                v-if="myBill.status === 'Paid'"
                class="btn btn-sm btn-success mt-3"
                disabled
              >
                Paid
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End MyBillCard -->
    </div>
  </div>
  <!-- ENd of My Bill -->
</template>
