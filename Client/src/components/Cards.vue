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
      <div class="card-body" v-if="this.chara.element === 'Ice'" style="background-color:aqua;">
        <p>{{ chara.element }}</p>
        <p class="card-text" style="text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14pt;font-weight: 550;">
          {{ chara.name }}
        </p>
      </div>
      <div class="card-body" v-else-if="this.chara.element === 'Fire'" style="background-color:firebrick;">
        <p>{{ chara.element }}</p>
        <p class="card-text" style="text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14pt;font-weight: 550;">
          {{ chara.name }}
        </p>
      </div>
      <div class="card-body" v-else-if="this.chara.element === 'Grass'" style="background-color:greenyellow;">
        <p>{{ chara.element }}</p>
        <p class="card-text" style="text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14pt;font-weight: 550;">
          {{ chara.name }}
        </p>
      </div>
      <div class="card-body" v-else-if="this.chara.element === 'Wind'" style="background-color:green;">
        <p>{{ chara.element }}</p>
        <p class="card-text" style="text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14pt;font-weight: 550;">
          {{ chara.name }}
        </p>
      </div>
      <div class="card-body" v-else-if="this.chara.element === 'Water'" style="background-color:blue;">
        <p>{{ chara.element }}</p>
        <p class="card-text" style="text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14pt;font-weight: 550;">
          {{ chara.name }}
        </p>
      </div>
      <div class="card-body" v-else-if="this.chara.element === 'Electric'" style="background-color:purple;">
        <p>{{ chara.element }}</p>
        <p class="card-text" style="text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14pt;font-weight: 550;">
          {{ chara.name }}
        </p>
      </div>
      <div class="card-body" v-else-if="this.chara.element === 'Rock'" style="background-color:orange;">
        <p>{{ chara.element }}</p>
        <p class="card-text" style="text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14pt;font-weight: 550;">
          {{ chara.name }}
        </p>
      </div>
    </div>
</template>
