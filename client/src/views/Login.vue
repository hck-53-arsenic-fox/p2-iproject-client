<script>
import { mapActions} from 'pinia'
import {usePiniaStore} from '../stores/usePiniaStore.js'
import {RouterLink} from 'vue-router'
export default {
    name: "Login",
    data(){
        return {
            loginForm: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        ...mapActions(usePiniaStore, ["login"]),
        loginHandle(){
            this.login(this.loginForm)
        }
    },
}
</script>

<template>
  

  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mb-10">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Please Login
              </h1>
              <form @submit.prevent="loginHandle" class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input v-model="loginForm.email" autocomplete="off" type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please insert your email">
                  </div>
                  <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input v-model="loginForm.password"  autocomplete="off" type="password" name="password" placeholder="Password min 5 characters" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500"> <RouterLink to="/register">please Register</RouterLink> </a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</template>