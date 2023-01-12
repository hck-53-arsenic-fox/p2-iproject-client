<script>
    import { mapState, mapActions } from 'pinia';
    import { useGenshinStore } from '../stores/store';

    export default {
        computed: {
            ...mapState(useGenshinStore, ['weaponList'])
        },
        methods: {
            ...mapActions(useGenshinStore, ['getWeapons'])
        },
        created(){
            this.getWeapons()
        }
    }
</script>

<template>
    <div>
        <table>
            <tr>{{ weaponList }}</tr>
        </table>
    </div>
</template>