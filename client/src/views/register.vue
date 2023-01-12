<script>
import { RouterLink, RouterView } from 'vue-router'
import { useResortStore } from '../stores/resort'
import { mapState, mapActions } from 'pinia'


export default {
  name: 'register',
  components: {

  },
  computed: {

  },
  methods: {
    ...mapActions(useResortStore, ['handleRegister']),
    onClickRegister() {
      this.handleRegister(this.username, this.email, this.password)
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
      class="relative flex flex-col m-6 space-y-10 bg-white shadow-xl rounded-2xl md:flex-row md:space-y-0 md:m-0 md:h-4/5 md:w-4/5">

      <!-- left side -->
      <img src="../assets/windmill.jpg" alt="" class="scale-[0.9] rounded-2xl hidden md:block">

      <!-- right side -->
      <div class="p-6 md:p-20">
        <!-- top content -->
        <h2 class="mb-5 text-4xl font-bold">Register Your Account</h2>
        <p class="max-w-sm mb-12 font-light text-grey-600">
          Let's get started with your account
        </p>

        <form @submit.prevent="onClickRegister">
          <input v-model="email" type="text"
            class="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
            placeholder="Enter Your Email Address" autocomplete="email">

          <input v-model="username" type="text"
            class="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
            placeholder="Enter Your Username" autocomplete="username">

          <input v-model="password" type="password"
            class="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
            placeholder="Enter Your Password">


          <div class="flex items-center justify-center">
            <button type="submit" class="bg-[#05B384] hover:bg-[#06D6A0] py-4 px-10 text-white rounded-xl mt-4">
              Register
            </button>
          </div>

        </form>



      </div>

    </div>
  </section>
</template>