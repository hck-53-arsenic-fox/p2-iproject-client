<script>
import { mapActions, mapState } from "pinia";
import { useAnimeStore } from "../stores/counter";

export default {
  computed: {
    ...mapState(useAnimeStore, ["videos"]),
  },
  methods:{
    ...mapActions(useAnimeStore,["showVideo"])
  },
  created(){
    this.showVideo()
  }
};
</script>

<template>
  <iframe v-for="video in videos" :key="video.publishTime"
    width="560"
    height="315"
    :src="`https://www.youtube.com/embed/${video.id.videoId}`"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</template>
