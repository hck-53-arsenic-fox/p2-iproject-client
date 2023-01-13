<script>
export default {
    name: "AstroCard",
    props: ["gallery"]
}
</script>

<template>


<!-- <div class="card bg-base-100 shadow-xl">
  <figure><img :src="gallery?.links[0]?.href"  alt="Album" style="width: 200px;" class="transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center" /></figure>
  <div class="card-body justify-center">
    <h2 class="card-title text-center px-20">{{ gallery?.data[0]?.title }}</h2>
    <p class="mb-20 px-20">{{ gallery?.data[0]?.description }}</p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div> -->


<!-- background -->
<div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100">
  <!-- card -->
  <div class="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
    <!-- img -->
    <img :src="gallery?.links[0]?.href" class="aspect-video rounded-t-2xl object-cover object-center" />
    <!-- text information -->
    <div class="p-4">
      <h3 class="text-2xl font-medium text-slate-600 pb-2">{{ gallery?.data[0]?.title }}</h3>
      <p class="text-sm tracking-tight font-light text-slate-400 leading-6">{{ gallery?.data[0]?.description }}</p>
    </div>
  </div>
</div>






<!-- <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center">
    <a href="#">
  <img class="rounded-t-lg" :src="gallery?.links[0]?.href" style="width: 200px;">
    </a>
</div> -->

</template>