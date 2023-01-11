<script setup>
import { RouterView } from "vue-router";
import TopNavbar from "./components/TopNavbar.vue";
</script>

<template>
  <div class="container-fluid p-0">
    <TopNavbar />
    <div class="container">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>
