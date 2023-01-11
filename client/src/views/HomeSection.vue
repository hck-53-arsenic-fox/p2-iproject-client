<script>
import { mapActions, mapState, mapStores } from "pinia";
import { useAnimeStore } from "../stores/counter";
import CardAnime from "../components/CardAnime.vue";
export default {
  data() {
    return {
      search: "",
    };
  },
  components: {
    CardAnime,
  },
  computed: {
    ...mapState(useAnimeStore, ["listsOfAnime","user"]),
    // ...mapStores(useAnimeStore),
    // isSubscribed() {
    //   return this.useAnimeStore.user.status
    //     ? true
    //     : false;
    // },
  },
  methods: {
    ...mapActions(useAnimeStore, ["fetchAnime","subscribe"]),
    subscribes() {
      if (!this.user.status) {
        this.subscribe();
      }
      else{
        console.log('hmmm')
      }
    },
  },
  created() {
    this.fetchAnime();
  },
};
</script>

<template>
  <div class="app">
    <header>
      <h1>The<strong>Anime</strong>Database</h1>
      <form class="search-box" @submit.prevent="fetchAnime(this.search)">
        <input
          v-model="search"
          type="search"
          class="search-field"
          placeholder="search for an anime..."
        />
      </form>
    </header>
    <main>
      <div class="cards1">
        <CardAnime
        v-if="listsOfAnime.length>0"
          v-for="anime in listsOfAnime"
          :key="anime.mal_id"
          :anime="anime"
        />
        <h4 v-if="listsOfAnime.length===0">Sorry, there is no anime that matches your type</h4>
      </div>
    </main>
  </div>
  <button @click.prevent="subscribes">aku suka</button>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
a {
  text-decoration: none;
}
header {
  padding-top: 50px;
  padding-bottom: 50px;
}
h1 {
  color: #888;
  font-size: 42px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
}
strong {
  color: #313131;
}
:hover {
  color: #313131;
}
.search-box {
  display: flex;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
}
.search-field {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  background-color: #f3f3f3;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  display: block;
  width: 100%;
  max-width: 600px;
  padding: 15px;
  border-radius: 8px;
  color: #313131;
  font-size: 20px;
  transition: 0.4s;
}
::placeholder {
  color: #aaa;
}
:focus {
  color: #fff;
  background-color: #313131;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
}

main {
  max-width: 1200px;
  margin: auto;
  padding-left: 30px;
  padding-right: 30px;
}
.cards1 {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
}
</style>
