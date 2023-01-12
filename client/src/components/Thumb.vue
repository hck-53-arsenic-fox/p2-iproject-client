<script>
    import { useCounterStore } from '../stores/counter'
    import { mapState, mapActions } from 'pinia'
    import { RouterLink } from 'vue-router';
    export default {
    props: ["judul", "trailer", "thumbnail", "rating", "score", "rank", "synopsis", "background"],
    components: { RouterLink },
    computed: {
        ...mapState(useCounterStore, ['isLogin'])
    },
    methods: {
        validate() {
            if( !localStorage.access_token ) {
               this.$router.push('/login')
            } else {
                window.location = this.trailer
            }
        }
    }
}
</script>

<template>
        <div class="col-3">
                <a @click.prevent="validate" href="">
                    <img width="220" height="350" class="rounded" :src="thumbnail"/>
                </a>
            <h3> {{ judul }} </h3>
            <p> rating:  {{ rating }} </p>
        </div>
</template>