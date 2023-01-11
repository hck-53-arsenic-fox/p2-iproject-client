<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  name: "LoginPage",
  data (){
    return{
      inputLogin:{
        email: '',
        password: ''
      }
    }
  },
  methods:{
    ...mapActions(useCounterStore, ['handleLogin'])
  }
};
</script>

<template>
  <section
    class="vh-100"
    style="
      background-image: url('https://ik.imagekit.io/tkvbrmjpc/nba_hn_hcQsFE.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1673338118629');
      height: 80%;
      background-size: cover;
    "
  >
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 40px; opacity: 0.9">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Log In</h2>
                <form @submit.prevent="handleLogin(inputLogin)">
                  <div class="form-outline mb-1">
                    <label class="form-label" for="form3Example3cg"
                      >Email</label
                    >
                    <input
                      type="email"
                      id="form3Example3cg"
                      class="form-control form-control-md"
                      v-model="inputLogin.email"
                    />
                  </div>

                  <div class="form-outline mb-1">
                    <label class="form-label" for="form3Example4cg"
                      >Password</label
                    >
                    <input
                      type="password"
                      id="form3Example4cg"
                      class="form-control form-control-md"
                      v-model="inputLogin.password"
                    />
                  </div>
                  <center>
                    <div>
                      <span style="color: black;">
                        Don't have Account? <RouterLink to="/register">Register Here</RouterLink>
                      </span>
                    </div>
                    <div class="d-flex justify-content-center">
                      <button
                        type="submit"
                        style="margin-top: 5px"
                        class="btn btn-dark"
                      >
                        Login
                      </button>
                    </div>
                    <p>- OR -</p>
                    <div>
                      <button>INI GOOGLE MAU FACEBOOK GA NGERTI</button>
                    </div>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
