<script>
    import { mapState, mapActions } from 'pinia';
    import { useGenshinStore } from '../stores/store';

    export default {
        methods: {
            ...mapActions(useGenshinStore, ['verify'])
        },

        created(){
            let {id} = this.$route.query
            this.verify(id)
        }
    }
</script>

<template>
    
</template>