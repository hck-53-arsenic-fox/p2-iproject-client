<script>
    import { useCounterStore } from '../stores/counter'
    import { mapState, mapActions } from 'pinia'
import { RouterLink } from 'vue-router';
    export default {
    props: ["judul", "trailer", "thumbnail", "rating", "score", "rank", "synopsis", "background"],
    components: { RouterLink }
}
</script>

<template>
        <div class="col-3">
            <RouterLink to="/">
                <img width="220" height="350" class="rounded" :src="thumbnail"/>
            </RouterLink>
            <h3> {{ judul }} </h3>
            <p> rating:  {{ rating }} </p>
        </div>
</template>