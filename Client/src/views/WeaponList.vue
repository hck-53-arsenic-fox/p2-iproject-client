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
            <th style="color: white;">Weapon Names</th>
            <tr v-for="weapon in weaponList" :key="weapon.id" style="color: white;">{{ weapon }}</tr>
        </table>
    </div>
</template>