<template>
    <ExitTour v-if="isTour"/>
</template>

<script>
    import { mapActions, mapState } from "pinia";   
    import "../helpers/virtual"
    import { useCounterStore } from "../stores/counter";
    import ExitTour from "./ExitTour.vue";
    export default {
        name : "TestPage",
        components : {
            ExitTour
        },
        methods : {
            ...mapActions(useCounterStore, ["ExitTour"])
        },
        computed : {
            ...mapState(useCounterStore, ["isTour"])
        }
    }
</script>