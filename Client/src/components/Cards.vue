<script>
import { mapState, mapActions } from "pinia";
import { useGenshinStore } from "../stores/store";

export default {
  props: ['chara'],

  methods: {
    ...mapActions(useGenshinStore, [''])
  }
};
</script>

<template>
    <div class="card" style="width: 15rem" @click.prevent="this.$router.push('/characters/' +this.chara.id)">
      <img class="card-img-top" :src=chara.icon alt="Card image cap" />
      <div class="card-body" style="background-color: ">
        <p>{{ chara.element }}</p>
        <p class="card-text" style="text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 13pt;">
          {{ chara.name }}
        </p>
      </div>
    </div>
</template>
