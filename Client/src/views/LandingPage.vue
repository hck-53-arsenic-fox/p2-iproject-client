<script>
    import { mapState, mapActions } from 'pinia';
    import { useGenshinStore } from '../stores/store';
    
    import Cards from '../components/Cards.vue'

    export default {
        components: {
            Cards
        },

        computed: {
            ...mapState(useGenshinStore, ['charaList'])
        },

        methods: {
            ...mapActions(useGenshinStore, ['getChara'])
        },

        async created(){
            this.getChara()
        }
    }
    
</script>

<template>
    <body>
        <div id="Container-Home">
            <div id="Chara-Cards">
                <Cards v-for="chara in charaList" :key="chara.id" :chara="chara"></Cards>
            </div>
        </div>
    </body>
</template>