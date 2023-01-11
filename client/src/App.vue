<script >
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue"
// import  TestPage from "./components/TestPage.vue"
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from './stores/counter';

export default {
  components :{
    Navbar,
    // TestPage
  },
  computed : {
    ...mapWritableState(useCounterStore, ["isShop", "isLogin"])
  },
  created() {
    this.isShop = true
    if(localStorage.access_token){
      this.isLogin = true
    }
  },
}
</script>

<template>
  <Navbar v-if="isLogin == true"/>
  <RouterView />
</template>

