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
      <div class="card-body" v-if="this.chara.element === 'Ice'" style="display: flex; gap: 25px;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW94aNdrG-stiEk44PgKdyvZrUFJv-taxtQJF4JDEZwQ&s" style="width: 65px"/>
        <!-- <p>{{ chara.element }}</p> -->
        <p class="card-text" style="text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14pt;font-weight: 550; margin-top: 20px;">
          {{ chara.name }}
        </p>
      </div>
      <div class="card-body" v-else-if="this.chara.element === 'Fire'" style="display: flex; gap: 25px;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-fJCiHCvF7n1udqMhGUGeu74HNDRsKXvk8CqY0M&s" style="width: 65px"/>
        <!-- <p>{{ chara.element }}</p> -->
        <p class="card-text" style="text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14pt;font-weight: 550; margin-top: 20px;">
          {{ chara.name }}
        </p>
      </div>
      <div class="card-body" v-else-if="this.chara.element === 'Grass'" style="display: flex; gap: 25px;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcJSxBy3Bnl0qhzx5Jt-uZInGi7WLpM7iII51HHRFvw&s" style="width: 65px"/>
        <!-- <p>{{ chara.element }}</p> -->
        <p class="card-text" style="text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14pt;font-weight: 550; margin-top: 20px;">
          {{ chara.name }}
        </p>
      </div>
      <div class="card-body" v-else-if="this.chara.element === 'Wind'" style="display: flex; gap: 25px;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcP26RA60gkvOhs72XH-pyPWDh0a4M3Vy20ib9mbjCNA&s" style="width: 65px"/>
        <!-- <p>{{ chara.element }}</p> -->
        <p class="card-text" style="text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14pt;font-weight: 550; margin-top: 20px;">
          {{ chara.name }}
        </p>
      </div>
      <div class="card-body" v-else-if="this.chara.element === 'Water'" style="display: flex; gap: 25px;;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgN0I-7lAhJdDe3AEok49RoVUuJ2vFlMweSSruFuM&s" style="width:65px"/>
        <!-- <p>{{ chara.element }}</p> -->
        <p class="card-text" style="text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14pt;font-weight: 550; margin-top: 20px;">
          {{ chara.name }}
        </p>
      </div>
      <div class="card-body" v-else-if="this.chara.element === 'Electric'" style="display: flex; gap: 25px;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOi9DMMqMXrRJM6Kq2foXi81QXbZtCvXM5anCjWhc9A&s" style="width:65px"/>
        <!-- <p>{{ chara.element }}</p> -->
        <p class="card-text" style="text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14pt;font-weight: 550; margin-top: 20px;">
          {{ chara.name }}
        </p>
      </div>
      <div class="card-body" v-else-if="this.chara.element === 'Rock'" style="display: flex; gap: 25px;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gJr83fss4ZlFJAJnYhmjOVe-20DmMjsJxy040v0&s" style="width:65px"/>
        <!-- <p>{{ chara.element }}</p> -->
        <p class="card-text" style="text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14pt;font-weight: 550; margin-top: 20px;">
          {{ chara.name }}
        </p>
      </div>
    </div>
</template>
