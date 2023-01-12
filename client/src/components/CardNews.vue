<script>
import { mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "CardNews",
  props: ["items", "page"],
  computed: {
    ...mapState(useCounterStore, ["status"]),
  },
};
</script>

<template>
  <div class="d-flex" style="margin-bottom: 10px">
    <img
      class="bg-image hover-overlay ripple shadow-2-strong rounded-5"
      :src="items.urlToImage"
      width="250"
      alt=""
    />
    <div>
      <h6 style="margin-left: 30px">{{ items.title }}</h6>
      <button
        type="button"
        class="btn btn-primary"
        style="margin-left: 30px"
        v-if="page === 'home'"
        @click.prevent="$router.push(`/politics/${items.source.id}`)"
      >
        Read more
      </button>
      <button
        type="button"
        class="btn btn-primary"
        style="margin-left: 30px"
        v-if="page === 'business'"
        @click.prevent="$router.push(`/business/${items.source.id}`)"
      >
        Read more
      </button>
      <button
        type="button"
        class="btn btn-primary"
        style="margin-left: 30px"
        v-if="page === 'technology'"
        @click.prevent="$router.push(`/technology/${items.source.id}`)"
      >
        Read more
      </button>
      <button
        type="button"
        class="btn btn-primary"
        style="margin-left: 30px"
        v-if="page === 'sports' && status !== 'VIP'"
        @click.prevent="$router.push(`/sports/${items.source.id}`)"
      >
        Read more
      </button>
    </div>
  </div>
</template>
