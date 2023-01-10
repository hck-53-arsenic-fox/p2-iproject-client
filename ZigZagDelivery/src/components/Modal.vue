<script>
export default {
  name: "regular-modal",
  data() {
    return {
    }
  },
  props:['sections'],
  methods: {
    toggleModal: function(){
      this.sections.modal = !this.sections.modal;
    }
  }
}
</script>

<template>
<div>
  <div v-if="sections.modal" class="opacity-50 fixed inset-0 z-10 bg-black"></div>
  <div class="rounded-t-lg fixed bg-white bottom-0 w-full h-24 duration-300 z-20" :class="{'h-3/4':sections.modal}">
      <!--content-->
      <div class="relative h-full w-full p-4 px-4 rounded-t-lg ">
        <!--header-->
        <div class="flex justify-between border-slate-400 rounded-t text-2xl">
          <div class=" mb-4">
            <span class="font-semibold">You're here</span>
          </div>
          <div @click="toggleModal()">
            <span><i class="fa-solid fa-xmark text-xl"></i></span>
          </div>
        </div>
        <!-- body -->
        <div class="mb-4">
          <div>
            <span>[address location]</span>
          </div>
          <div>
            <span>Nearest pick-up point: [station name]</span>
          </div>
        </div>
        <div class="w-full h-3/5 bg-slate-700 rounded-xl shadow-xl">
          <img src="../assets/images/staticBackground.png" alt="static" class="h-full w-full object-cover rounded-xl z-0"/>
        </div>
      </div>
    </div>
  </div>

</template>