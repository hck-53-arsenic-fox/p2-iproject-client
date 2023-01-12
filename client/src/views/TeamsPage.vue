<script>
import { mapActions, mapState } from 'pinia';
import Navbar from '../components/Navbar.vue';
import NavbarTwo from '../components/NavbarTwo.vue';
import TableTeam from '../components/TableTeam.vue';
import { usePlayerStore } from '../stores/player';


export default {
    name: "TeamsPage",
    components: { TableTeam, Navbar, NavbarTwo },
    methods: {
        ...mapActions(usePlayerStore, ['fetchTeams'])
    },
    computed: {
        ...mapState(usePlayerStore, ['teams'])
    },
    created() {
        this.fetchTeams()
    }
}
</script>

<template>
    <!-- <Navbar /> -->
    <NavbarTwo />

    <section class="container">
        <div class="row justify-content-start mb-5"  style="padding-top: 100px;">
            <div class="col-md-8  section-heading">
                <span class="subheading">ENBI E</span>
                <h2 class="heading mb-3">Team list</h2>
                <p>The ENational BIsketball Essociation (ENBI E) was established in 2023 and it quickly grew into one of the biggest sports organizations in the entire world. Today there are 30 ENBI E teams that each play 82 games every regular season (the 2023-01 season was shortened to 72 games).</p>
            </div>
        </div>

        <table class="table">
            <thead class="table-dark">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Team</th>
                    <th scope="col">Abbreviation</th>
                    <th scope="col">City</th>
                    <th scope="col">Conference</th>
                    <th scope="col">Division</th>
                </tr>
            </thead>
            <tbody>
                <TableTeam v-for="team in teams.data" :key="team.id" :team="team" />
            </tbody>
        </table>
    </section>

</template>