<script >
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue"
// import  TestPage from "./components/TestPage.vue"
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from './stores/counter';
import ExitTour from './components/ExitTour.vue';

export default {
  components :{
    Navbar,
    // TestPage
    ExitTour
  },
  computed : {
    ...mapWritableState(useCounterStore, ["isShop", "isLogin"]),
    ...mapState(useCounterStore, ["isTour"])
  },
  created() {
    // this.isShop = true
    if(localStorage.access_token){
      this.isLogin = true
    }
  },
}
</script>

<template>
  <Navbar v-if="isLogin == true && isTour == false"/>
  
  <RouterView />
</template>

