<script>
import { RouterLink, RouterView } from 'vue-router'
import { useResortStore } from '../stores/resort'
import { mapState, mapActions } from 'pinia'


export default {
  name: 'form',
  components: {

  },
  computed: {

  },
  methods: {
    ...mapActions(useResortStore, ['createResort']),
    onClickAdd() {
      this.createResort(this.title, this.location, this.description, this.imageUrl, this.price)
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
      class="relative flex flex-col m-6 space-y-10 bg-white shadow-xl rounded-2xl md:flex-row md:space-y-0 md:m-0 md:h-4/5 md:w-4/5 bg-opacity-50">

      <!-- left side -->
      <img src="../assets/4139996.jpg" alt="" class="w-[560px] rounded-2xl hidden md:block">

      <!-- right side -->
      <div class="p-6 md:p-6">
        <!-- top content -->
        <h2 class="mb-3 text-4xl font-bold">Add New Hotel</h2>
        <p class="max-w-sm mb-12 font-light text-grey-600">
          Let's add new hotel!
        </p>
        <form @submit.prevent="onClickAdd" action="" class="justify-center items-center">
          <input v-model="title" type="text"
            class="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light" placeholder="Name">

          <input v-model="location" type="text"
            class="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
            placeholder="Enter Location">


          <input v-model="price" type="number"
            class="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
            placeholder="Price per Night">

          <input v-model="imageUrl" type="url"
            class="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light" placeholder="ImageUrl">

          <!-- <input name="image" type="file"
            class="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
            placeholder="Upload the Photo"> -->

          <input v-model="description" type="text"
            class="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
            placeholder="Enter Description">

          <div class="flex items-center justify-center my-3">
            <button type="submit" class="bg-[#05B384] hover:bg-[#06D6A0] py-3 px-10 text-white rounded-xl mt-2">
              Add Resort
            </button>
          </div>
        </form>



      </div>

    </div>
  </section>
</template>


