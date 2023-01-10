<script>
export default {
  props:['sections'],
  emits:['activatedMenu'],
  methods: {
    activatedMenu(section){
      this.$emit('activatedMenu', section)
    },
  },
  
};
</script>

<template>
  <div class="fixed bottom-0 bg-white h-24 w-full px-4 z-50">
    <div class="grid grid-cols-6 h-12 w-full my-4">

      <!-- Only in home page -->
      <!-- <div v-if="sections.homePage" class="col-span-1 mr-1">
        <div class="h-full w-full bg-amber-400 rounded-lg shadow-md">
          <span class="grid w-full h-full place-items-center text-3xl text-white font-normal">
            <svg style="width:32px;height:32px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4,4H10V10H4V4M20,4V10H14V4H20M14,15H16V13H14V11H16V13H18V11H20V13H18V15H20V18H18V20H16V18H13V20H11V16H14V15M16,15V18H18V15H16M4,20V14H10V20H4M6,6V8H8V6H6M16,6V8H18V6H16M6,16V18H8V16H6M4,11H6V13H4V11M9,11H13V15H11V13H9V11M11,6H13V10H11V6M2,2V6H0V2A2,2 0 0,1 2,0H6V2H2M22,0A2,2 0 0,1 24,2V6H22V2H18V0H22M2,18V22H6V24H2A2,2 0 0,1 0,22V18H2M22,22V18H24V22A2,2 0 0,1 22,24H18V22H22Z" />
            </svg>
          </span>
        </div>
      </div> -->
      
      <!-- <div @click="activatedMenu('destinationPage')" class="ml-1 duration-300" :class="{'col-span-5':sections.homePage, 'col-span-6':!sections.homePage}"> -->
      <div @click="activatedMenu('destinationPage')" class="ml-1 duration-300 col-span-6" >
        <div class="h-full w-full bg-green-400 rounded-lg shadow-md">
          <div class="grid w-full h-full place-items-center">
            <span class=" text-white font-medium text-lg"><i class="fa-solid fa-bus-simple mr-2"></i>Create Order</span>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
