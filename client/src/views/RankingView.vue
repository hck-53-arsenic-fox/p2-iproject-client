<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
    name: 'RankingView',
    methods: {
        ...mapActions(useUserStore, ['fetchFighter'])
    },
    computed: {
        ...mapState(useUserStore, ['allFighters'])
    },
    created() {
        this.fetchFighter()
    }
}
</script>

<template>
    <div>
        <h1 style="text-align: center;">RANKINGS</h1>
        <div class="d-flex align-content-stretch flex-wrap">
            <div class="p-2">
                <h1>Pound For Pound</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="fighter in allFighters.pound_for_pound" :key="`fighter1-${fighter.id}`">
                            <th scope="row">{{ fighter.rank }}</th>
                            <td><RouterLink :to="`/fighter/${fighter.id}`" style="text-decoration: none;color:black">{{ fighter.name }}</RouterLink></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="p-2">
                <h1>Heavyweight</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="fighter in allFighters.heavyweight" :key="`fighter2-${fighter.id}`">
                            <th scope="row">{{ fighter.rank + 1 }}</th>
                            <td><RouterLink :to="`/fighter/${fighter.id}`" style="text-decoration: none;color:black">{{ fighter.name }}</RouterLink></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="p-2">
                <h1>Light Heavyweight</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="fighter in allFighters.light_heavyweight" :key="`fighter3-${fighter.id}`">
                            <th scope="row">{{ fighter.rank + 1 }}</th>
                            <td><RouterLink :to="`/fighter/${fighter.id}`" style="text-decoration: none;color:black">{{ fighter.name }}</RouterLink></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="p-2">
                <h1>Middleweight</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="fighter in allFighters.middleweight" :key="`fighter3-${fighter.id}`">
                            <th scope="row">{{ fighter.rank + 1 }}</th>
                            <td><RouterLink :to="`/fighter/${fighter.id}`" style="text-decoration: none;color:black">{{ fighter.name }}</RouterLink></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="p-2">
                <h1>Welterweight</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="fighter in allFighters.welterweight" :key="`fighter3-${fighter.id}`">
                            <th scope="row">{{ fighter.rank + 1 }}</th>
                            <td><RouterLink :to="`/fighter/${fighter.id}`" style="text-decoration: none;color:black">{{ fighter.name }}</RouterLink></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="p-2">
                <h1>Lightweight</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="fighter in allFighters.lightweight" :key="`fighter3-${fighter.id}`">
                            <th scope="row">{{ fighter.rank + 1 }}</th>
                            <td><RouterLink :to="`/fighter/${fighter.id}`" style="text-decoration: none;color:black">{{ fighter.name }}</RouterLink></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="p-2">
                <h1>Featherweight</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="fighter in allFighters.featherweight" :key="`fighter3-${fighter.id}`">
                            <th scope="row">{{ fighter.rank + 1 }}</th>
                            <td><RouterLink :to="`/fighter/${fighter.id}`" style="text-decoration: none;color:black">{{ fighter.name }}</RouterLink></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="p-2">
                <h1>Bantamweight</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="fighter in allFighters.bantamweight" :key="`fighter3-${fighter.id}`">
                            <th scope="row">{{ fighter.rank + 1 }}</th>
                            <td><RouterLink :to="`/fighter/${fighter.id}`" style="text-decoration: none;color:black">{{ fighter.name }}</RouterLink></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="p-2">
                <h1>Flyweight</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="fighter in allFighters.flyweight" :key="`fighter3-${fighter.id}`">
                            <th scope="row">{{ fighter.rank + 1 }}</th>
                            <td><RouterLink :to="`/fighter/${fighter.id}`" style="text-decoration: none;color:black">{{ fighter.name }}</RouterLink></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>