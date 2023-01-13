<script>
import{mapActions, mapState} from 'pinia'
import{usePiniaStore} from '../stores/usePiniaStore.js'
import AstroCard from '../components/AstroCard.vue'

export default {
    name: "AstroPage",
    components: {
        AstroCard
    },
    methods: {
        ...mapActions(usePiniaStore, ["astroGallery"])
    },
    computed: {
        ...mapState(usePiniaStore, ["dataAstros"])
    },
    created(){
        this.astroGallery()
    }
}
</script>

<template>
    
   
<AstroCard
v-for="(gallery, index) in dataAstros.collection?.items" :key="gallery.id"
:gallery="gallery"
/>

  

</template>