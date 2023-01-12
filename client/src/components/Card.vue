<script>
export default {
  props: ["item"],
};
</script>

<template>
  <!-- CARD ROOM -->

    <div class="col">
      <div class="card mb-5" style="max-width: 500px">
        <img
          :src="item.imageUrl"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
            <div style="height: 175px">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">
                  {{ item.description }}
              </p>
            </div>
        <button class="btn btn-warning" @click.prevent="this.$router.push(`/room/${item.id}`)">Detail Room</button>
    </div>
      </div>
    </div>
</template>
