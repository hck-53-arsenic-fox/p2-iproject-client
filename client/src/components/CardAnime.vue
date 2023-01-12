<script>
export default {
  props: ["anime"],
};
</script>

<template>
  <div class="card2">
    <a href="#" target="_blank">
      <img :src="anime.images.jpg.image_url" alt="anime poster image" />
      <h3>{{ anime.title }}</h3>
    </a>
  </div>
</template>

<style>
.card2 {
  flex: 1 1 33%;
  width: 33%;
  max-width: 100%;
  padding: 0px 8px;
}
img {
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  transition: 0.4s;
}
h3 {
  padding: 16px;
  color: #313131;
}
</style>
