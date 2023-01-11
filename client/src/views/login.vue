<script>
import { RouterLink, RouterView } from 'vue-router'
import { useResortStore } from '../stores/resort'
import { mapState, mapActions } from 'pinia'


export default {
  name: 'login',
  components: {

  },
  computed: {

  },
  methods: {
    ...mapActions(useResortStore, ['handleLogin']),
    onClickLogin() {
      this.handleLogin(this.email, this.password)
    }
  },
  created() {

  }
}

</script>

<template>
  <section class="flex items-center justify-center h-screen bg-[#EBF1FF] bg-cover">

    <!-- card container -->
    <div
      class="relative flex flex-col m-6 space-y-5 bg-white shadow-xl rounded-2xl md:flex-row md:space-y-0 md:m-0 md:h-4/5 md:w-4/5 bg-opacity-50">
      <img src="../assets/4559992.jpg" alt="" class="align-center scale-[0.95] rounded-2xl hidden md:block">

      <!-- left side -->

      <!-- right side -->
      <div class="p-6 md:p-20">
        <!-- top content -->
        <h2 class="mb-5 text-4xl font-bold">Log In</h2>
        <p class="max-w-sm mb-12 font-light text-grey-600">
          Log in to your account to see add your resorts
        </p>

        <form @submit.prevent="onClickLogin">
          <input v-model="email" type="text"
            class="w-full p-6 mb-3 border border-gray-300 rounded-md placeholder:font-light"
            placeholder="Enter Your Email Address">

          <input v-model="password" type="password"
            class="w-full p-6 mb-3 border border-gray-300 rounded-md placeholder:font-light"
            placeholder="Enter Your Password">


          <div class="flex items-center justify-center">
            <button type="submit" class="bg-[#05B384] hover:bg-[#06D6A0] py-3 px-10 text-white rounded-xl mt-2">
              Login
            </button>
          </div>

        </form>

        <!-- middle content -->
        <div class="flex items-center justify-center mt-8 space-y-6 md:flex-row md:space-y-0">

          <p class="font-thin text-[#4C5B60]">
            Don't have an account? <a href="" class="underline decoration-1">Let's register</a>
          </p>

        </div>

      </div>

    </div>
  </section>
</template>