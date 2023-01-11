<template>
    <div>
        <router-link >
            <button class="text-3xl z-20">Exit</button>
        </router-link>
    </div>
</template>

<script>
    import { mapActions, mapState } from "pinia";
    import "../helpers/virtual"
    import { useCounterStore } from "../stores/counter";
    mapActions
    export default {
        name : "TestPage",
        methods : {
            ...mapActions(useCounterStore, ["ExitTour"])
        }
    }
</script>