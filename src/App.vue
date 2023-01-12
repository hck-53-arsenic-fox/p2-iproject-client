<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { mapWritableState } from "pinia";
import { useUserStore } from "./stores/user";
export default {
  components: { Navbar, Footer },
  computed: {
    ...mapWritableState(useUserStore, ['isLogin'])
  },
  created() {
    if(localStorage.getItem("access_token")) {
      this.isLogin = true
    }
  }
};
</script>

<template>
  <Navbar
    v-if="
      this.$route.name !== 'loginPage' && this.$route.name !== 'registerPage' && this.$route.name !== 'forumPage' 
    "
  />
  <div class="container flex flex-col min-h-[89vh] justify-between">
    <RouterView />
    <Footer />
  </div>
</template>
