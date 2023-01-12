<script>
    import { mapState, mapActions } from 'pinia';
    import { useGenshinStore } from '../stores/store';

    export default {
        computed: {
            ...mapState(useGenshinStore, ['weaponList']),
            ...mapActions(useGenshinStore, ['singleWeapon'])
        },
        methods: {
            ...mapActions(useGenshinStore, ['getWeapons']),
            ...mapActions(useGenshinStore, ['weaponDetail']),
        },
        async created(){
            await this.getWeapons()
            
        }
    }
</script>

<template>
    <div>
        <table>
            <th style="color: white;">Weapon Names</th>
            <tr v-for="weapon in weaponList" :key="weapon.id" style="color: white; font-weight: 500; font-family: Verdana, Geneva, Tahoma, sans-serif;">{{ weapon }}</tr>
        </table>
    </div>
</template>