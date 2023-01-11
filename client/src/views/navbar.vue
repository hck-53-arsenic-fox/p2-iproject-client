<script>
import { mapActions, mapWritableState } from 'pinia';
import { useUserStore } from '../stores/user';

export default{
  computed:{
    ...mapWritableState(useUserStore,['acces_token'])
  },
  methods:{
    logout(){
      Swal.fire({
                title: 'LOGOUT SUCCESS',
                text: `Login For Watch Your Favorite Movie Again `,
                icon: 'success',
                confirmButtonText: 'OK'
            })
      localStorage.clear()
      this.acces_token=''
      this.$router.push('/')
    }
  },
  created(){
    this.acces_token=localStorage.getItem('acces_token')
  }
}
</script>

<template>
    <section>
    <nav class="navbar navbar-light " style="background-color: black;position: sticky;">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/netflix.png" height="25" alt="Logo" loading="lazy" />
      </a>
    </div>
    <div class="d-flex justify-content-center" style="margin-right: 2%;">
      <RouterLink to="login" v-if="!acces_token" class="btn btn-block text-body"><b style="color: red;">Login</b></RouterLink>
      <RouterLink to="favorite" v-if="acces_token" class="btn btn-block text-body"><b style="color: red;">Favorite</b></RouterLink>
      <a @click="logout" v-if="acces_token" class="btn btn-block text-body"><b style="color: red;">Logout</b></a>
    </div>
  </nav>
</section>
</template>