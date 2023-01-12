<script>
import { mapActions } from 'pinia';
import { useMovieStore } from '../stores/movie';
    export default{
        name: 'Login', 
        data(){
            return{
                email: '', 
                password: ''
            }
        }, 
        methods: {
            ...mapActions(useMovieStore, ['Login'])
        }
    }
</script>

<template>
    <div class="container p-3 pb-5 bg-light my-3 content-login">
  <section id="login">
    <div class="d-flex justify-content-center mb-4">
      <img src="../assets/mtixlogo.jpg">
    </div>
    <form @submit.prevent="Login(email , password)">
        <div class="input-group mb-4">
        <span class="input-group-text" id="basic-addon1">&#x2709;</span>
        <input v-model="email" type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-4">
        <span class="input-group-text" id="basic-addon2">&#x1F512;</span>
        <input v-model="password" type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2">
        </div>
        <div class="d-flex justify-content-between">
        <button class="btn btn-success">Login</button>
        </div>
    </form>
    <hr>
    <a @click.prevent="$router.push('/')" href="">New Member, Register M-Tix</a>
  </section>
</div>
</template>