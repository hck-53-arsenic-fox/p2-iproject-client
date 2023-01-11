<script>
import { mapWritableState } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import { useCounterStore } from "./stores/counter";
export default {
  name: "App",
};
</script>

<template>
  <!-- <Navbar /> -->
  <RouterView />
</template>
