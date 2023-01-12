<script>
import { def } from '@vue/shared';
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{
    data(){
        return{
            email: ''
        }
    },
    methods: {
        ...mapActions(useCounterStore, ['handleFormEmail'])
    }
}

</script>

<template>
<section class="bg-gray-100 flex justify-center border-t-2 z-0 h-screen items-center" id="login-section" >
        <div class="w-[430px] max-w-[430px] bg-[#ffff] shadow-md rounded items-center">
            <div class="p-[30px]">
                <span class="text-3xl font-semibold relative ">Reset Password</span>
                <form class="mt-4" id="login-form" >
                  <div class="mt-[30px] w-full relative h-[50px]">
                      <input class="w-full h-full absolute px-[35px] border-b-2 border-b-gray-400 focus:outline-none focus:border-b-gray-800 form-input" type="text" placeholder="Enter your Email" required v-model="email">
                      <i class="px-[5px] text-gray-400 absolute top-[32%] left-0 fa-regular fa-envelope " ></i>
                  </div>
              <button class="mt-[30px] w-full relative bg-yellow-500 cursor-pointer h-[50px] flex justify-center items-center rounded hover:bg-yellow-700 text-[20px] text-white font-semibold" @click.prevent="handleFormEmail(this.email)">
                  Login
              </button>
              <div class="mt-[20px] w-full relative h-[50px] flex justify-center items-center rounded ">
                  <span class="text-[15px]">Back to: <RouterLink to="/login" class="text-blue-900 hover:underline hover:underline-offset-3 " href="" >Login</RouterLink></span>
              </div>
          </form>
      </div>
  </div>
</section>

</template>