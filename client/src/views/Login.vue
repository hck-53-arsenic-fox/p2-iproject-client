<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
import {GoogleLogin} from 'vue3-google-login'

    export default{
        components: {
            GoogleLogin
        },
        data(){
            return{
                data : {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions(useCounterStore, ['handleFormLogin', 'handleGoogleLogin']),
            callback(response){
                this.googleLogin(response.credential)
            },
            googleLogin(token){
                this.handleGoogleLogin( token )
            }
        }
    }
</script>

<template>
    <section class="bg-gray-100 flex justify-center border-t-2 z-0 h-screen items-center" id="login-section" >
        <div class="w-[430px] max-w-[430px] bg-[#ffff] shadow-md rounded items-center">
            <div class="p-[30px]">
                <span class="text-3xl font-semibold relative ">Login</span>
                <form class="mt-4" id="login-form" @submit.prevent="handleFormLogin(this.data)">
                  <div class="mt-[30px] w-full relative h-[50px]">
                      <input class="w-full h-full absolute px-[35px] border-b-2 border-b-gray-400 focus:outline-none focus:border-b-gray-800 form-input" type="text" placeholder="Enter your Email" required v-model="data.email">
                      <i class="px-[5px] text-gray-400 absolute top-[32%] left-0 fa-regular fa-envelope "></i>
                  </div>
                  <div class="mt-[30px] w-full relative h-[50px]">
                      <input class="w-full h-full absolute px-[35px] border-b-2 border-b-gray-400 focus:outline-none focus:border-b-gray-800 form-input" type="password" placeholder="Enter your Password" required v-model="data.password">
                      <i class="px-[5px] text-gray-400 absolute top-[32%] left-0 fa-solid fa-lock" i></i>
                    </div>
                    <div class="flex justify-between">
                        <div class="mt-[10px] ml-1.5 w-full relative h-[20px]">
                            <input type="checkbox"> <span class="pl-0.5 text-[15px]">Remember me</span>
                        </div>
                        <div class="mt-[10px] flex justify-end w-full relative h-[20px]">
                          <RouterLink to="/forgot" class=" text-blue-900 hover:underline hover:underline-offset-3 text-[15px] " href="" >Forgot Password</RouterLink>
                        </div>
                    </div>
              <button class="mt-[30px] w-full relative bg-yellow-500 cursor-pointer h-[50px] flex justify-center items-center rounded hover:bg-yellow-700 text-[20px] text-white font-semibold">
                  Login
              </button>
              <div class="text-center">
                  <i class="text-[13px] font-semibold">OR</i>
              </div>
              <div class="mt-[10px] w-[80%] mx-auto relative h-[38px] rounded-lg text-white text-lg font-bold text-center w-full">
                <GoogleLogin :callback="callback"/>
              </div>
              <div class="mt-[20px] w-full relative h-[50px] flex justify-center items-center rounded ">
                  <span class="text-[15px]">Don't have an account? <RouterLink to="/register" class="text-blue-900 hover:underline hover:underline-offset-3 " href="" >Register Now</RouterLink></span>
              </div>
          </form>
      </div>
  </div>
</section>
</template>