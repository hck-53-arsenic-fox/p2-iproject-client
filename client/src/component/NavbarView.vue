<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    name: "NavbarView",
    computed: {
      ...mapState(useCounterStore, ['access_token','role'])
    },
    methods:{
      ...mapActions(useCounterStore, ['handleLogut','midTrans']),
      changePage(value){
        this.$router.push(value)
      }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <RouterLink to="/">
          <img src="../assets/img/NBA-logo-design.png" style="width: 40px;" alt="logo">
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" style="padding-left: 10px;">
              <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </a>
              <ul class="dropdown-menu">
                <li><RouterLink class="dropdown-item" to="/teams">Teams</RouterLink></li>
              </ul>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about-subscribe">About Subscribe</RouterLink>
            </li>
          </ul>
          <div>
            <button class="btn btn-outline-light" type="submit" style="margin-right: 10px;" v-if="role === 'Unsubscribe'" @click="midTrans">Subscribes</button>
            <button class="btn btn-outline-light" type="submit" @click.prevent="changePage('/login')" v-if="!access_token">Login </button>
            <button class="btn btn-outline-light" type="button" @click.prevent="handleLogut" v-if="access_token">Logout</button>
          </div>
        </div>
      </div>
    </nav>

</template>