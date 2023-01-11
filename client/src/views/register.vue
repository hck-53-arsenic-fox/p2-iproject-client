<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';

export default{
  data(){
    return{
      dataRegister:{
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods:{
    ...mapActions(useUserStore,['register'])
  }
}
</script>

<template>
    <section class="h-100 bg-image" id="register-section"
     style="background-image: url('https://www.whats-on-netflix.com/wp-content/uploads/2022/07/netflix-library-made-up-of-50-percent-netflix-originals.webp');background-size: 100%;"
     >
     <div class="mask d-flex align-items-center h-100 gradient-custom-3">
       <div class="container h-100">
         <div class="row d-flex justify-content-center align-items-center h-100">
           <div class="col-12 col-md-9 col-lg-7 col-xl-6">
             <div class="card" style="border-radius: 15px;">
               <div class="card-body p-5">
                 <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                 <form @submit.prevent="register(dataRegister)">
                   <div class="form-outline mb-4">
                     <label class="form-label" for="form3Example1cg">Your Email</label>
                     <input type="email" v-model="dataRegister.email" id="email" class="form-control form-control-lg" />
                   </div>

                   <div class="form-outline mb-4">
                     <label class="form-label" for="form3Example3cg">Your Usename</label>
                     <input type="text" v-model="dataRegister.username" id="username" class="form-control form-control-lg" />
                   </div>

                   <div class="form-outline mb-4">
                     <label class="form-label" for="form3Example4cg">Password</label>
                     <input type="password" v-model="dataRegister.password" id="password" class="form-control form-control-lg" />
                   </div>


                   <div class="d-flex justify-content-center">
                     <button type="submit"
                       class="btn btn-primary btn-block btn-lg gradient-custom-4 text-body" >Register</button>
                   </div>

                   <p class="text-center text-muted mt-5 mb-0">Have already an account? <RouterLink to="login" href="#!"
                       class="fw-bold text-body"><u style="color: aliceblue;">Login here</u></RouterLink></p>
                 </form>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
 
</template>