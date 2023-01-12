<script setup>
import HeaderBar from "./components/HeaderBar.vue";
import BottomNav from "./components/BottomNav.vue";
</script>

<template>
  <HeaderBar />

  <div class="my-16 p-5 w-screen md:px-20">
    <router-view />
  </div>

  <BottomNav />
</template>
