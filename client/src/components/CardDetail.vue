<script>
export default {
  name: "CardDetail",
  props: ["items"],
};
</script>

<template>
  <div class="d-flex">
    <img
      :src="items.urlToImage"
      class="card-img-top"
      alt="..."
      style="width: 50%"
    />
    <div class="d" style="margin-left: 100px">
      <h3>{{ items.title }}</h3>
      <p>{{ items.description }}</p>
      <p></p>
      <p>Author: {{ items.author }}</p>
      <img src="" alt="" />
    </div>
  </div>
</template>
