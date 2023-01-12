<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import NeighborCardComponent from "../components/NeighborCardComponent.vue";
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";
import SearchComponent from "../components/SearchComponent.vue";

export default {
  name: "HomePage",
  components: {
    NavbarComponent,
    SearchComponent,
    NeighborCardComponent,
  },
  computed: {
    ...mapState(useUserStore, ["neighbors", "isLogin"]),
  },
  methods: {
    ...mapActions(useUserStore, ["fetchNeighbor"]),
    metot(a) {
      console.log(a);
    },
  },
  created() {
    this.fetchNeighbor();
  },
};
</script>

<template>
  <NavbarComponent />
  <SearchComponent />
  <!-- Neighbor -->
  <div class="container my-4">
    <h3 class="text-center my-4">List Neighbor</h3>
    <div class="row">
      <NeighborCardComponent
        v-for="neighbor in neighbors"
        :key="neighbor.id"
        :neighbor="neighbor"
      />
    </div>
  </div>
  <!-- End of Neighbor -->
</template>
