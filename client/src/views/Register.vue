<script>
import { mapActions } from 'pinia';
import { useMovieStore } from '../stores/movie';
    export default{
        name: "Register", 
        data(){
            return {
                telepon: '', 
                name: '', 
                email: '', 
                password: '', 
                address: '', 
                otp: ''
            }
        },
        methods: {
            ...mapActions(useMovieStore, ['GetOtp' , 'Register'])
        }
    }
</script>

<template>
     <div class="container p-3 pb-5 bg-light my-3 content-login">
  <section id="login">
    <div class="d-flex justify-content-center mb-4">
      <img src="../assets/mtixlogo.jpg">
    </div>
    <form @submit.prevent="GetOtp(telepon)">
        <div class="input-group mb-4">
        <span class="input-group-text" id="basic-addon1">&#128241;</span>
        <input v-model="telepon" type="text" class="form-control" placeholder="Phone Number" aria-label="phoneNumber" aria-describedby="basic-addon1">
        </div>
        <button class="mb-4 btn btn-success">Get OTP</button>
    </form>
    <form @submit.prevent="Register(otp , name , email , password , address , telepon)">
        <div class="input-group mb-4">
        <span class="input-group-text" id="basic-addon2">&#9993;</span>
        <input v-model="otp" type="text" class="form-control" placeholder="OTP" aria-label="OTP" aria-describedby="basic-addon2">
        </div>
        <div class="input-group mb-4">
        <span class="input-group-text" id="basic-addon2">&#x1F9CD;</span>
        <input v-model="name" type="text" class="form-control" placeholder="Name" aria-label="name" aria-describedby="basic-addon2">
        </div>
        <div class="input-group mb-4">
        <span class="input-group-text" id="basic-addon2">@</span>
        <input v-model="email" type="text" class="form-control" placeholder="Email" aria-label="Password" aria-describedby="basic-addon2">
        </div>
        <div class="input-group mb-4">
        <span class="input-group-text" id="basic-addon2">&#x1F512;</span>
        <input v-model="password" type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2">
        </div>
        <div class="input-group mb-4">
        <span class="input-group-text" id="basic-addon2">&#x1F3E0;</span>
        <input v-model="address" type="text" class="form-control" placeholder="address" aria-label="address" aria-describedby="basic-addon2">
        </div>
        <div class="d-flex justify-content-between">
        <button class="btn btn-success">Register</button>
        </div>
    </form>
    <hr>
  </section>
</div>
</template>