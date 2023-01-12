<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    name: "HomePage",
    computed:{
      ...mapState(useCounterStore, ['twoTeam', 'live', 'fourArticle','role','articles', 'access_token'])
    },
    methods:{
      ...mapActions(useCounterStore, [ 'getTeams', 'handleLive','articleBasket'])
    },
    created(){
      this.getTeams()
      this.handleLive()
      this.articleBasket()

    }
}

</script>

<template>
     <section style="padding-top: 10px;">     
      <div class="container">
          <div class="row">
              
              <div class="col-lg-8">
                  <!-- Carousel-->
                  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active" data-bs-interval="10000">
                        <img src="https://cdn.nba.com/manage/2023/01/tatum-driving-vs-giannis.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                          <h5 color="white">Midseason Report Cards: Grades for all 15 teams in the East</h5>
                          <p>As the NBA officially hits the midseason point for 2022-23, take a closer look at how each team in the Eastern Conference has fared so far this season.</p>
                        </div>
                      </div>
                      <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://cdn.nba.com/manage/2023/01/dedmon-1-1568x882.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Dewayne Dedmon ejected after bizarre sideline scene in Miami</h5>
                          <p>The veteran center had a dispute with the Heat coaching staff before swatting a massage gun onto the court to earn his ejection.</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="https://cdn.nba.com/manage/2023/01/butler-iso-1568x882.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Jimmy Butler, Heat set NBA free-throw record in win over Thunder</h5>
                          <p>Butler ties the NBA record for individual perfection at 23-for-23 while the Heat break the team record at 40-for-40.</p>
                        </div>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div class="card mb-4" style="margin-top: 20px;"  >
                    <center>
                    <div class="card-header">Teams</div>
                    </center>
                    <div class="card-body" v-for="el in twoTeam" :key="el.id">
                      Abbreviation : {{ el.abbreviation }} <br>
                      Full Name : {{ el.full_name }} <br>
                      City : {{ el.city }}
                    </div>
                    <center>
                      <button class="btn btn-outline-dark">
                        <RouterLink to="/teams" style="color: black;text-decoration:none">See More Team</RouterLink>
                      </button>
                    </center>
                  </div>
              </div>
              <!-- Nested row for non-featured blog posts-->
              <!-- Side widgets-->
              <div class="col-lg-4">
                  <!-- Side widget-->
                  <div class="card mb-4">
                      <div class="card-header" v-for="el in articles" :key="el.id"><a :href="el.url">{{ el.title }}</a></div>
                      

                  </div>
              </div>
          </div>
      </div>
  </section>

  <!-- content Page -->
  <div v-if="role !== 'Unsubscribe' && access_token">
  <center>
    <h3>STATISTIC LIVE MATCH</h3>
  </center>
    <div class="row">
      <div class="col-sm-6" style="padding-top: 10px;" v-for="el in live" :key="el.id">
        <div class="card">
          <div class="card-body" >
            <center>
              <h5 class="card-title">{{ el.League }}</h5>
            </center>
            <p class="card-text">Away Score : {{ el["Away Score"] }}
              <br>
              Away Team :   {{ el["Away Team"] }}
              <br>
              Home Score :  {{ el["Home Score"] }}
              <br>
              Home Team :   {{ el["Home Team"] }}
              <br>
              Match ID : {{ el["Match ID"] }}
              <br>
              Period 1 Away : {{ el["Period 1 Away"] }}
              <br>
              Period 1 Home : {{ el["Period 1 Home"] }}
              <br>
              Period 2 Away : {{ el["Period 2 Away"] }}
              <br>
              Period 2 Home : {{ el["Period 2 Home"] }}
              <br>
              Period 3 Away : {{ el["Period 3 Away"] }}
              <br>
              Period 3 Home : {{ el["Period 3 Home"] }}
              <br>
              Status : {{ el.Status }}
              <br>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>