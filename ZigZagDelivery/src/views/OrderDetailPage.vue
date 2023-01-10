<script>
  import CreateOrder from "../components/CreateOrder.vue";
  export default {
    components:{
      CreateOrder,
    },
    data(){
      return {
        isBox:false
      }
    },
    methods:{
      togglePackage(){
        this.isBox = !this.isBox
      }
    }
  }
</script>

<template>
  <div class="fixed h-24 top-0 w-full bg-cyan-600 grid items-center justify-center px-4">
    <span class="text-white text-xl font-semibold">Package Details</span>
    <div class="absolute bottom-0 justify-self-center w-5/6 h-1 my-2 grid grid-cols-3 gap-2">
      <div class="bg-white h-1"></div>
      <div class="bg-white h-1"></div>
      <div class="bg-white h-1"></div>
    </div>
  </div>
  
  <div class="h-screen w-full bg-white px-4 pt-4">
    <div class="mt-28 w-full bg-slate-500">
      <div>
        <span class="text-xl font-semibold">Enter package details</span>
      </div>
      <div>
        <span class="text-md text-slate-600">Sent from:</span>
        <span class="text-md">[Current location]</span>
      </div>

      <div class="">
        <div class="my-4"><span>Pakcage type:</span></div>

        <div class="m-4">
          <ul class="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full p-1">
            <li>
              <a @click.prevent="togglePackage" href="#page1" class="flex justify-center py-1" :class="{'bg-white rounded-full shadow text-indigo-900': !isBox }">Document</a>
            </li>
            <li>
              <a @click.prevent="togglePackage" href="#page2" class="flex justify-center py-1" :class="{'bg-white rounded-full shadow text-indigo-900': isBox }">Box</a>
            </li>
          </ul>
        </div>

        <div  v-if="!isBox">
          <div class="my-2"><span>Document type:</span></div>
          <div class="p-4">
            <div class="w-full bg-amber-300 relative">
              <div class="w-full grid grid-cols-2 gap-2">
                <div class=" bg-red-200 grid items-center justify-center m-2 p-2">
                  <div class="grid items-center justify-center">
                    <img src="../assets/icons/letter.svg" class="" height="100px" width="100px" alt="">
                  </div>
                  <div><span class="text-xs grid items-center justify-center">Pesonal Letter</span></div>
                </div>
                <div class=" bg-red-200 grid items-center justify-center m-2 p-2">
                  <div class="grid items-center justify-center">
                    <img src="../assets/icons/document.svg" class="" height="75px" width="75px" alt="">
                  </div>
                  <div><span class="text-xs grid items-center justify-center">Confidential Document</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="isBox">
        <div class="my-2"><span>Package dimension:</span></div>
  
        <div class="p-4">
          <div class="w-full bg-amber-300 relative">
            <div class="w-full grid">
              <div class=" bg-red-200 grid items-center justify-center m-2 p-2">
                <img src="../assets/icons/package-box.svg" class="" height="200px" width="200px" alt="">
              </div>
            </div>
          </div>
        </div>
  
  
        <div class="grid grid-cols-3">
          <div class="p-2 relative">
            <div class="absolute -top-1 pl-2"><span class="text-sm bg-white rounded-lg px-1">Width (W)</span></div>
            <div class="">
              <input type="number" name="packageWeight" id="packageWeight" class="w-full rounded-lg">
            </div>
          </div>
          <div class="p-2 relative">
            <div class="absolute -top-1 pl-2"><span class="text-sm bg-white rounded-lg px-1">x Height (H)</span></div>
            <div>
              <input type="number" name="packageHeight" id="packageHeight" class="w-full  rounded-lg">
            </div>
          </div>
          <div class="p-2 relative">
            <div class="absolute -top-1 pl-2"><span class="text-sm bg-white rounded-lg px-1">x Length (L)</span></div>
            <div>
              <input type="number" name="packageLength" id="packageLength" class="w-full  rounded-lg">
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>