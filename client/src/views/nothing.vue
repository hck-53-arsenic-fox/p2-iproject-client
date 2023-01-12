<script>
import { mapActions, mapWritableState } from 'pinia';
import { useUserStore } from '../stores/user';


export default{
  computed:{
    ...mapWritableState(useUserStore,['acces_token'])
  },
  created(){
    this.acces_token=localStorage.getItem('acces_token')
  }
}
</script>
<template>
  <section class="lop">
  <div class="noise"></div>
<div class="overlay"></div>
<div class="terminal">
  <h1>Error <span class="errorcode">404</span></h1>
  <p class="output">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
  <p v-if="acces_token" class="output">Please try to <RouterLink to="/" class="apa" href="#2">return to the homepage</RouterLink>.</p>
  <p v-if="!acces_token" class="output">Please try to <RouterLink to="/login" class="apa" href="#2">return to the homepage</RouterLink>.</p>
  <p class="output">Good luck.</p>
</div>
</section>
</template>