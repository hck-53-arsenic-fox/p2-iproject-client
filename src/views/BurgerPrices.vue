<script setup>
import { reactive, ref, computed } from "vue";
import TableRow from "../components/TableRow.vue";
import axios from "axios";
const baseUrl = "http://localhost:3001";

const state = reactive({
  selectedCountryCode: 'IDN',
  selectedCountry: "",
  relativePrices: "",
  bigMacAmount: 1,
  mapRenderData: "",
});

//Visualize GeoChart
function renderMap() {
  google.charts.load("current", {
    packages: ["geochart"],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);
}
function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable(state.mapRenderData);

  var options = {
    colorAxis: { colors: ["#fc890d"] },
    defaultColor: '#884701',
  };

  var chart = new google.visualization.GeoChart(
    document.getElementById("regions_div")
  );

  chart.draw(data, options);
}

async function init(countryCode = 'idn') {
  try {
    const { data } = await axios.get(`${baseUrl}/relative-prices/${countryCode}`);

    state.selectedCountry = data.selected;
    state.relativePrices = data.relativePrices;

    const mapData = data.relativePrices.map((el) => {
      return [
        el.country,
        +el[`${data.selected.currency_code}_price`],
        +el[`relative_price_to_${data.selected.currency_code}`],
      ];
    });
    const mapHeader = [
      "Country",
      `${data.selected.currency_code} Price`,
      `Relative price to ${data.selected.currency_code} ±%`,
    ];
    mapData.unshift(mapHeader);
    mapData.forEach((el, i) => {
      if (el[0] === "Euro area") {
        mapData.splice(i, 1);
      }

      if(el[0] === state.selectedCountry.country) {
        el[1] = null
        el[2] = null
      }
    });
    // console.log(mapData)

    state.mapRenderData = mapData;
    renderMap();
  } catch (error) {
    console.log(error);
  }
}

init();

const totalBigMacPrice = computed(() => {
  return state.bigMacAmount * state.selectedCountry.local_price
})
</script>

<template>
  <main class=" flex flex-col md:flex-row md:gap-10">

      <section id="map" class=" md:w-1/2 ">
        <div class=" w-full md:fixed md:w-2/5 md:top-44 md:ml-5">
          <p class="font-bold text-lg mb-10 text-center">Big Mac price around the world in {{ state.selectedCountry.currency_code }}</p>

          <div id="regions_div" class="w-full m-auto"></div>
        </div>
      </section>

      <section id="text-and-table" class=" flex flex-col gap-10 md:w-1/2 md:mt-8 mt-14">

        <div>
          <p class=" text-xs mb-2">Select a country and Big Mac amount to buy</p>

          <form>
            <div class="flex">
              <div class="my-auto block p-1.5 bg-gray-50 rounded-l-lg border-r-gray-100 border-l border-t border-b border-gray-300">

                <img
                v-if="state.selectedCountryCode === 'EUZ'"
                src="../assets/europe.png"
              class="border h-7"
               />


                <img
                v-else
              :src="`https://countryflagsapi.com/svg/${state.selectedCountryCode}`"
              crossorigin="anonymous"
              class="border h-7"
               />


              </div>
    

              <select
              v-model="state.selectedCountryCode"
              @change.prevent="init(state.selectedCountryCode)"
              class=" border-t border-b border-r bg-gray-50 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"

              >
                <option selected disabled>Choose a country</option>
                <option v-for="country in state.relativePrices" :key="'option-country-' + country.iso_a3"
                :value="country.iso_a3"                >
                  {{ country.country }}
                </option>
              </select>

              <div class="relative w-1/4">
                <input
                  v-model="state.bigMacAmount"
                  type="number"
                  class="block p-2.5 w-full z-20 text-sm text-center text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  min="1"
                />
              </div>
            </div>
          </form>
        </div>

        

          <div class="flex flex-row justify-around">
            <div class="text-center m-auto">
              <p class="text-3xl">🍔</p>
              <p class="text-xs mt-2">@ {{state.selectedCountry.local_price}}</p>
            </div>

            <div class=" m-auto text-2xl">&#x2715</div>

            <div class="text-center m-auto">
              <p class="text-3xl">{{ state.bigMacAmount }}</p>
            </div>

            <div class=" m-auto text-4xl pb-1">&#x3D</div>

            <div class="text-center m-auto">
              <p class="text-2xl"> {{ state.selectedCountry.currency_code }} {{ totalBigMacPrice }}</p>
            </div>
          </div>

          <div>
            <p class="font-semibold">{{ state.bigMacAmount }} Big Macs in {{ state.selectedCountry.country }} costs {{ state.selectedCountry.currency_code }} {{ totalBigMacPrice }}</p>

            <p>Big Mac's price and the amount you get for {{ state.selectedCountry.currency_code }} {{ totalBigMacPrice }} on other countries</p>
          </div>

          <!-- table -->
          <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-xs text-left text-gray-500">
              <thead class="text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" class="py-3 px-6 text-center">Country</th>
                  <th scope="col" class="py-3 px-6 text-center">{{ state.selectedCountry.currency_code }} Price</th>
                  <th scope="col" class="py-3 px-6 text-center">Relative Price</th>
                  <th scope="col" class="py-3 px-6 text-center">Big Macs for {{ state.selectedCountry.currency_code }} {{ totalBigMacPrice }} </th>
                </tr>
              </thead>
              <tbody>
                <TableRow 
                v-for="country in state.relativePrices" :key="'country-' + country.iso_a3"
                :country="country"
                :selectedCountry="state.selectedCountry"
                :selectedCountryCode="country.iso_a3"
                :totalBigMacPrice="totalBigMacPrice"
                />
              </tbody>
            </table>
          </div>

      </section>
  </main>

</template>
