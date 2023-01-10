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
</template>
