<script setup>
import { reactive, ref, computed } from "vue";
import { useWorkingTimesStore } from "../stores/workingTimes";
import HorizontalBarChart from "../components/HorizontalBarChart.vue";

const store = useWorkingTimesStore();
store.fetchWorkingTimes();
</script>

<template>
  <main class="md:px-20">
    <div id="title-container" class="mb-5 flex flex-col md:gap-2">
      <h2 class="text-2xl font-semibold w-3/4">
        Working times needed to buy a Big Mac
      </h2>

      <form>
        <div class="flex">
          <select
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 mt-2 md:m-0"
          >
            <option selected disabled value="">Choose a country</option>
          </select>
        </div>
      </form>
    </div>

    <div class="md:flex md:flex-row md:justify-center">
      <div
        id="detail-container"
        class="md:w-1/2 md:order-2 md:p-10 md:flex md:flex-col md:justify-center md:-mt-5"
      >
        <h2 class="text-2xl font-semibold hidden md:flex md:w-3/4 md:mb-5">
          On average, people in Indonesia need 120 minutes of working times to
          be able to buy a Big Mac
        </h2>

        <div class="flex flex-row gap-5 text-lg">
          <div><i class="fa-solid fa-clock"></i> 120 Minutes</div>
          <div><i class="fa-solid fa-burger"></i> $2.34</div>
          <div><i class="fa-solid fa-briefcase"></i> $175 / Month</div>
        </div>
      </div>

      <img
        src="../assets/working.jpg"
        alt=""
        class="md:w-1/2 md:order-1 my-5 md:my-0"
      />
    </div>

    <div class="">
      <HorizontalBarChart class="" />
    </div>
  </main>
</template>
