<script>
    import { useCounterStore } from '../stores/counter'
    import { mapState, mapActions } from 'pinia'
    export default {
        props: ['judul','trailer','thumbnail','rating','score','rank','synopsis','background']
    }
</script>

<template>
        <div class="col-3">
            <img width="220" height="350" class="rounded" :src="thumbnail"/>
            <h3> {{ judul }} </h3>
            <p> rating:  {{ rating }} </p>
        </div>
</template>