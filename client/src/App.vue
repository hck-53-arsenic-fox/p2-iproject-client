<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapWritableState} from 'pinia'
import {usePiniaStore} from './stores/usePiniaStore.js'
import Navbar from './components/Navbar.vue'

export default {
  name: "App",
  components: {
    RouterView,
    Navbar
  },
  created(){
    if(localStorage.access_token){
      this.isLogin = true
    }
  },
  computed: {
    ...mapWritableState(usePiniaStore, ["isLogin"])
  },
}
</script>

<template>
  <Navbar/>
  <RouterView />
</template>

