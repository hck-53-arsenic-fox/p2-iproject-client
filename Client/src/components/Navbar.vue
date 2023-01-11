<script>
import { mapActions, mapState } from 'pinia';
import { useGenshinStore } from '../stores/store'

export default {
  methods: {
    ...mapActions(useGenshinStore, ['logout'])
  }
}

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" @click.prevent="this.$router.push('/')">Genshin Wikia</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#" style="margin-left: 5%;" @click.prevent="this.$router.push('/')">Characters <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#" style="margin-left: 5%;" @click.prevent="this.$router.push('/account')">Account</a>
      <a class="nav-item nav-link" href="#" style="margin-left: 380%; color: green;" @click.prevent="this.$router.push('/login')">Login</a>
      <a class="nav-item nav-link" href="#" style="margin-left: 1%; color: red;" @click.prevent="logout">Logout</a>
    </div>
  </div>
</nav>
</template>