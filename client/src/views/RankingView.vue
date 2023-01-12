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
    <div style="margin-top: 50px;">
        <h1 style="text-align: center;margin-bottom: 50px;">RANKINGS</h1>
        <div class="row m-4">
            <div class="col-4" style="text-align: center;">
                <div>
                    <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_profile_listing_medium_1x/s3/2022-04/98fc7c50-3d1d-4d2e-805f-9b7045edb917%252FVOLKANOVSKI_ALEXANDER_BELT_04-09.png?itok=YV2-kWJL">
                </div>
                <h3 style="text-align: center;">Pound For Pound</h3>
                <table class="table table-striped" style="text-align: center;">
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
            <div class="col-4" style="text-align: center;">
                <div style="text-align: center;">
                    <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_profile_listing_medium_1x/s3/2022-01/c3e2e69e-c6cc-4fdf-be51-67baf84e6bb6%252FNGANNOU_FRANCIS_BELT_01-22.png?itok=cBvn7aNh">
                </div>
                <h3 style="text-align: center;">Heavyweight</h3>
                <table class="table table-striped" style="text-align: center;">
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
            <div class="col-4" style="text-align: center;">
                <div style="height:125px">
                </div>
                <h3 style="text-align: center;">Light Heavyweight</h3>
                <table class="table table-striped" style="text-align: center;">
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
            <div class="col-4" style="text-align: center;">
                <div style="text-align: center;">
                    <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_profile_listing_medium_1x/s3/2022-11/PEREIRA_ALEX_BELTMOCK.png?itok=Y8jCmTiY">
                </div>
                <h3 style="text-align: center;">Middleweight</h3>
                <table class="table table-striped" style="text-align: center;">
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
            <div class="col-4" style="text-align: center;">
                <div style="text-align: center;">
                    <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_profile_listing_medium_1x/s3/2022-08/EDWARDS_LEON_BELTMOCK.png?itok=QveSPdxi">
                </div>
                <h3 style="text-align: center;">Welterweight</h3>
                <table class="table table-striped" style="text-align: center;">
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
            <div class="col-4" style="text-align: center;">
                <div style="text-align: center;">
                    <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_profile_listing_medium_1x/s3/2022-10/MAKHACHEV_ISLAM_BELTMOCK.png?itok=2C8J7eta">
                </div>
                <h3 style="text-align: center;">Lightweight</h3>
                <table class="table table-striped" style="text-align: center;">
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
            <div class="col-4" style="text-align: center;">
                <div style="text-align: center;">
                    <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_profile_listing_medium_1x/s3/2022-04/98fc7c50-3d1d-4d2e-805f-9b7045edb917%252FVOLKANOVSKI_ALEXANDER_BELT_04-09.png?itok=YV2-kWJL">
                </div>
                <h3 style="text-align: center;">Featherweight</h3>
                <table class="table table-striped" style="text-align: center;">
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
            <div class="col-4" style="text-align: center;">
                <div style="text-align: center;">
                    <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_profile_listing_medium_1x/s3/2022-10/STERLING_ALJAMAIN_BELT_10-22.png?itok=TnJ1WPJu">
                </div>
                <h3 style="text-align: center;">Bantamweight</h3>
                <table class="table table-striped" style="text-align: center;">
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
            <div class="col-4" style="text-align: center;">
                <div>
                    <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_profile_listing_medium_1x/s3/2022-11/fcbdb9c5-266b-4216-acad-7e5006f15772%252FFIGUEIREDO_DEIVESON_06-12.png?itok=eMyA140o">
                </div>
                <h3>Flyweight</h3>
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