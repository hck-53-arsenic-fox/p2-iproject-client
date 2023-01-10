<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  methods: {
    ...mapActions(useUserStore, ["logout"]),
  },
};
</script>

<template>
  <a @click.prevent="logout" class="nav-link fontstyle active" href="#"
    >Logout</a
  >
</template>
