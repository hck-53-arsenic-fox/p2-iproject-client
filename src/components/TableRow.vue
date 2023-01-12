<script setup>
import { reactive, computed } from "vue";

const props = defineProps([
  "country",
  "selectedCountry",
  "totalBigMacPrice",
  "selectedCountryCode",
]);

const state = reactive({ overlayArea: 1 });

const relativePricePercentage = computed(() => {
  const relativePrice =
    props.country[`relative_price_to_${props.selectedCountry.currency_code}`];

  return relativePrice > 0 ? `+${relativePrice}%` : relativePrice + "%";
});

const relativeBigMacAmount = computed(() => {
  const selectedCountryPrice =
    props.country[`${props.selectedCountry.currency_code}_price`];

  const relativeAmount = (
    props.totalBigMacPrice / selectedCountryPrice
  ).toFixed(2);

  const bigmacs = [];
  while (bigmacs.length < Math.floor(relativeAmount)) {
    bigmacs.push("🍔");
  }

  const area = ((relativeAmount - Math.floor(relativeAmount)) / 1) * 100;

  state.overlayArea = area;
  return bigmacs.join(" ");
});
</script>

<template>
  <tr class="bg-white border-b">
    <th
      scope="row"
      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
    >
      <!-- <img
        v-if="props.selectedCountryCode !== 'EUZ'"
        :src="`https://countryflagsapi.com/svg/${props.selectedCountryCode}`"
        crossorigin="anonymous"
        class="h-auto w-6 inline border mr-1"
      />

      <img
        v-else
        src="../assets/europe.png"
        alt=""
        class="h-auto w-6 inline border mr-1"
      /> -->
      {{ country.country }}
    </th>
    <td
      class="py-4 px-6 text-right"
      v-text="country[`${props.selectedCountry.currency_code}_price`]"
    ></td>
    <td class="py-4 px-6 text-center">
      {{ relativePricePercentage }}
    </td>
    <td class="py-4 px-6 text-lg">
      {{ relativeBigMacAmount }}
      <span
        class="relative after:content-['🍔'] after:brightness-0 after:invert after:absolute after:left-0 after:bg-white"
        :class="[
          {
            'after:clip-path-inset-[0_0_0_10%]':
              state.overlayArea > 5 && state.overlayArea <= 15,
            'after:clip-path-inset-[0_0_0_20%]':
              state.overlayArea > 15 && state.overlayArea <= 25,
            'after:clip-path-inset-[0_0_0_30%]':
              state.overlayArea > 25 && state.overlayArea <= 35,
            'after:clip-path-inset-[0_0_0_40%]':
              state.overlayArea > 35 && state.overlayArea <= 45,
            'after:clip-path-inset-[0_0_0_50%]':
              state.overlayArea > 45 && state.overlayArea <= 55,
            'after:clip-path-inset-[0_0_0_60%]':
              state.overlayArea > 55 && state.overlayArea <= 65,
            'after:clip-path-inset-[0_0_0_70%]':
              state.overlayArea > 65 && state.overlayArea <= 75,
            'after:clip-path-inset-[0_0_0_80%]':
              state.overlayArea > 75 && state.overlayArea <= 85,
            'after:clip-path-inset-[0_0_0_90%]':
              state.overlayArea > 85 && state.overlayArea <= 95,
            'after:clip-path-inset-[0_0_0_100%]': state.overlayArea > 95,
            hidden: state.overlayArea <= 5,
          },
        ]"
        >🍔</span
      >
    </td>
  </tr>
</template>
