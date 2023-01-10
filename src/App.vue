<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'
export default {
  components: {Navbar, Footer}
}
</script>

<template>
  <Navbar v-if="this.$route.name !== 'loginPage' && this.$route.name !== 'registerPage'"/>
  <div class="container flex flex-col min-h-[89vh] justify-between">
    <RouterView />
    <Footer/>
  </div>
</template>