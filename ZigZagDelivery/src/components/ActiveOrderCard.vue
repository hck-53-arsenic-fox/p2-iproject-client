<script>
export default {
  props:[],
  emits:[],
  methods: {

  },
  
};
</script>


<template>
  <div class="grid grid-cols-6 w-full h-16 my-2 bg-white rounded-xl shadow-lg">
    <div class="col-span-1 h-16 w-full bg-black rounded-l-xl">
      <!-- <img src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="example" class="h-full w-full object-cover"/> -->
    </div>
    <div class="col-span-4 h-16 w-full">
      <div class="py-1 px-4">
        <div>
          <span class="text-lg font-medium">#[Order Number]</span>
        </div>
        <div class="text-sm font-normal ">
          <span class="text-center px-2 mr-2 bg-cyan-500 rounded-md">transit</span>
          <span class="px-1">Origin</span><i class="fa-solid fa-right-long"></i><span class="px-1">Destination</span>
        </div>
      </div>
    </div>
    <div class="col-span-1 h-16 w-full">
      <div class="grid w-full h-full place-items-center text-xs text-center">
        <span class="m-0 p-0 text-slate-800">ETA<br>99 mins</span>
      </div>
    </div>
  </div>
</template>
