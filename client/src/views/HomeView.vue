<script>
  import Card from '../components/thumb.vue'
  import { useCounterStore } from '../stores/counter';
  import { mapActions, mapState } from 'pinia';
  import Quote from '../components/QuotesAnime.vue'
  export default {
    components: { Card, Quote },
    computed: {
      ...mapState( useCounterStore, ['dataAnime'])
    },
  }
</script>

<template> 
  <Quote />
  <div class="container mt-5">
    <div class="row">
      <Card v-for="lop in dataAnime.data" :key="lop.mal_id"
        :judul="lop.title"
        :trailer="lop.trailer.url"
        :thumbnail="lop.images.jpg.image_url"
        :rating="lop.rating"
        :score="lop.score"
        :rank="lop.rank"
        :synopsis="lop.synopsis"
        :background="lop.background"
      />
    </div>
  </div>
</template>