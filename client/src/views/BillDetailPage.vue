<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  name: "BillDetailPage",
  components: {
    NavbarComponent,
  },
  methods: {
    ...mapActions(useUserStore, ["getPayment"]),
  },
};
</script>

<template>
  <NavbarComponent />
  <!-- My Course -->
  <div class="container my-4">
    <h3 class="text-center my-4">My Courses</h3>
    <div class="row">
      <!-- MyCourseCard -->
      <div class="col-4 mb-3">
        <div class="card p-3 rounded-3">
          <div class="row align-items-center">
            <div class="col-3">
              <img
                src="https://mustopa28121992.github.io/projectt/img/fox--md5--a9e377ae39495073d0e66db163fc8d9b.png"
                alt="logo"
                class="mx-auto d-block"
                style="width: 70px"
              />
            </div>
            <div class="col-9">
              <h5 class="mb-0">React Native Intro</h5>
              <p class="mb-0">Instructor : <strong>Harry Dhimas</strong></p>
              <p class="mb-2">Schedule :</p>
              <p class="mb-3">
                <span class="badge rounded-pill bg-warning text-dark"
                  >Monday</span
                >
                <span class="badge rounded-pill bg-warning text-dark"
                  >Tuesday</span
                >
              </p>
              <button @click="getPayment" class="btn btn-sm btn-primary">
                Pay Bill
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End MyCourseCard -->
    </div>
  </div>
</template>
