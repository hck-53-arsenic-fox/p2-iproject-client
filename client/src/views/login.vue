<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';

export default{
  data(){
    return{
      dataLogin:{
        email:'',
        password: ''
      }
    }
  },
  methods:{
    ...mapActions(useUserStore,['login'])
  }
}
</script>

<template>
 <section class="h-100" id="login-section">
      <nav class="navbar navbar-light " style="background-color: black;position: sticky;">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/netflix.png" height="25" alt="Logo" loading="lazy" />
      </a>
    </div>
    <div class="d-flex justify-content-center" style="margin-right: 2%;">
      <RouterLink to="/" class="btn btn-block text-body"><b style="color: red;">Home</b></RouterLink>
    </div>
  </nav>
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="../assets/images/pngegg.png" class="img-fluid" alt="Sample image">
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form @submit.prevent="login(dataLogin)" id="login-form">
              <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p class="lead fw-normal mb-0 me-3" style="color: aliceblue;">Sign in with</p>
              </div>
              <GoogleLogin :callback="callback"/>
              <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0" style="color: aliceblue;">Or</p>
              </div>


              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3" style="color: aliceblue;">Email address</label>
                <input type="email" v-model="dataLogin.email" id="form3Example3" class="form-control form-control-lg"
                  placeholder="Enter a valid email address" />
              </div>


              <div class="form-outline mb-3">
                <label class="form-label" for="form3Example4" style="color: aliceblue;">Password</label>
                <input type="password" v-model="dataLogin.password" id="form3Example4" class="form-control form-control-lg"
                  placeholder="Enter password" />
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button type="submit" class="btn btn-primary btn-lg" 
                  style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                <p class="small fw-bold mt-2 pt-1 mb-0" style="color: aliceblue;">Don't have an account? <RouterLink to="register" href="#!"
                    class="link-danger" >Register</RouterLink></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-5 px-4 px-xl-5 bg-black" style="margin-top: 80px;">
        <span style="color: aliceblue;">LETS WATCH MOVIE !</span> 
      </div>
    </section>
</template>