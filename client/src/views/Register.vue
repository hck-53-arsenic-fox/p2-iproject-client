<script>
import { mapActions } from 'pinia'
import { usePiniaStore } from '../stores/usePiniaStore.js'
import {RouterLink} from 'vue-router'
// import {RouterLink} from 'vue-router'
export default {
    name: "Register",
    data() {
        return{
            dataUser: {
                username: "",
                email: "",
                password: ""
            }
        }
    },
    methods: {
        ...mapActions(usePiniaStore, ["register"]),
        handleRegister(){
            this.register(this.dataUser)
        }
    },
}
</script>



<template>
  
  <div  class="flex flex-col items-center justify-center px-6 py-8 mx-auto my-[15px]">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Please Register
              </h1>
              <form class="space-y-4 md:space-y-6" @submit.prevent="handleRegister">
                <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <input v-model="dataUser.username" autocomplete="off" type="text" name="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please insert your name" required="">
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input v-model="dataUser.email" autocomplete="off" type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please insert your email" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input v-model="dataUser.password"  autocomplete="off" type="password" name="password" placeholder="Password min 5 characters" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                      Already have an account? Proceed to <a class="font-medium text-primary-600 hover:underline dark:text-primary-500"> <RouterLink to="/login">Login</RouterLink></a>
                  </p>
              </form>
          </div>
      </div>
  </div>

</template>