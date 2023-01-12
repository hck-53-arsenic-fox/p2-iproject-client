<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  name: "TeamPage",
  computed:{
    ...mapState(useCounterStore, ['teams'])
  },
  methods:{
    ...mapActions(useCounterStore, ['getTeams'])
  },
  created(){
    this.getTeams()
  }
};
</script>

<template>
  <center>
    <h5>ALL TEAMS</h5>
  </center>
  <table class="table caption-top; container">
  <thead>
    <tr>
      <th scope="col">Abbreviation</th>
      <th scope="col">Full Name</th>
      <th scope="col">City</th>
      <th scope="col">Name</th>
      <th scope="col">Conference</th>
      <th scope="col">Division</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="el in teams.data" :key="el.id">
      <th >{{ el.abbreviation }}</th>
      <td>{{ el.full_name }}</td>
      <td>{{ el.city }}</td>
      <td>{{ el.name }}</td>
      <td>{{ el.conference }}</td>
      <td>{{ el.division }}</td>
     
    </tr>
    
  </tbody>
</table>
</template>
