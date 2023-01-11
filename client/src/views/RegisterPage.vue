<script>
import { mapActions } from 'pinia';
import {useCounterStore} from '../stores/counter'

export default {
    name: "RegisterPage",
    data(){
        return{
                name: '',
                email: '',
                password: ''
        }
    },
    methods:{
        ...mapActions(useCounterStore, ['handleRegister'])
    }
}
</script>
<template>
     <section id="login-section" style="background-color: white;height:100vh;display: flex;align-items: center;" >
        <div class="col-12 shadow-lg p-3 mb-5 bg-white rounded" style="width: 500px;margin-left: auto;margin-right: auto;padding-top: 10%; background-image:url(https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80);">
      <div class="col-12">
        <img src="../assets/img/NBA-logo-design.png" alt="logo" style="width: 50px;" align="right">
        <h2 style="text-align: center">REGISTER</h2>
        <form class="container" @submit.prevent="handleRegister(name,email,password)" >
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input
              type="name"
              class="form-control"
              name="name"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="name"
              
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="email"
             
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              name="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="password"
           
            />
          </div>
          <center style="margin-bottom: 30px">
            <button type="submit" class="btn btn-outline-dark">Register</button>
            <div style="margin-top: 10px;">
              <span style="color: black">
                You have any Account?
                <RouterLink to="/login" >Login Here</RouterLink>
              </span>
            </div>
          </center>
        </form>
      </div>
    </div>
  </section>


</template>