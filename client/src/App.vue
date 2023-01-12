<script>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from './views/navbar.vue'
import { mapWritableState } from 'pinia'
import { useCounterStore } from "./stores/counter"


export default{
  components:{
    Navbar
  },
  computed:{
    ...mapWritableState(useCounterStore, ['isAuth'])
  },
  methods:{

  },
  created(){
    if(localStorage.access_token){
      this.isAuth = true
    }

  }
}
</script>

<template>
  <Navbar></Navbar>
  <RouterView />
</template>
