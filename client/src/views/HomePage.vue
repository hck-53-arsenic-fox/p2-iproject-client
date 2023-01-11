<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  name: "HomePage",
  components: {
    NavbarComponent,
  },
};
</script>

<template>
  <NavbarComponent />
  <!-- Neighbor -->
  <div class="container my-4">
    <h3 class="text-center my-4">List Neighbor</h3>
    <div class="row">
      <!-- NeighborCard -->
      <div class="col-4 mb-3">
        <div class="card p-3 rounded-3">
          <div class="row align-items-center">
            <div class="col-3">
              <img
                src="../../public/image/bailey-anselme-Bkp3gLygyeA-unsplash.jpg"
                alt="logo"
                class="mx-auto d-block"
                style="width: 70px"
              />
            </div>
            <div class="col-9">
              <h5 class="mb-0">Name</h5>
              <p class="mb-0">Instructor : <strong>Home Number</strong></p>
              <p class="mb-0">Schedule :</p>
              <p class="mb-0">
                <span class="badge rounded-pill bg-warning text-dark"
                  >Other Information</span
                >
                <!-- <span class="badge rounded-pill bg-warning text-dark">Tuesday</span> -->
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- End of NeighborCard -->
    </div>
  </div>
  <!-- End of Neighbor -->
</template>
