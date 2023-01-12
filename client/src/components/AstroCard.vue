<script>
export default {
    name: "AstroCard",
    props: ["gallery"]
}
</script>

<template>


<div class="card bg-base-100 shadow-xl">
  <figure><img :src="gallery?.links[0]?.href"  alt="Album" style="width: 200px;" /></figure>
  <div class="card-body">
    <h2 class="card-title">{{ gallery?.data[0]?.title }}</h2>
    <p class="mb-20">{{ gallery?.data[0]?.description }}</p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>





<!-- <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center">
    <a href="#">
  <img class="rounded-t-lg" :src="gallery?.links[0]?.href" style="width: 200px;">
    </a>
</div> -->

</template>