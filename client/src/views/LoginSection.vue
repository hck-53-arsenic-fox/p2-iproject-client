<script>
import { ref } from "vue";
import configFirebase from "../configFirebase";
import firebase from "firebase/compat/app";
import { useRouter, useRoute } from 'vue-router'

import { mapActions } from "pinia";
import { useAnimeStore } from "../stores/counter";

firebase.initializeApp(configFirebase);
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { getAuth, signOut } from "firebase/auth"


export default {
//   setup() {
//     const router = useRouter()
//     console.log(router)
//     let user = ref(null);
//     let isSignedIn = ref(false);
//     const uiconfig = {
//       signInFlow: "popup",
//       signinSuccessurl: "http://localhost:5173/",
//       signInOptions: [
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//         firebase.auth.GithubAuthProvider.PROVIDER_ID,
//       ],
//       callbacks: {
//         signInSuccessWithAuthResult: function (authResult) {
//           console.log(authResult.credential)
//           localStorage.setItem("access_token",authResult.credential.accessToken)
//           user.value = authResult.user.displayName;
//           console.log(authResult);
//           router.push({name:'home'})
//           isSignedIn.value = true;
//           console.log("Signed in by user" + user.value);
//           return false;
//         },
//         uiShown: function () {
//           document.getElementById("loader").style.display = "none";
//         },
//       },
//     };
//     var ui = new firebaseui.auth.AuthUI(firebase.auth());
//     ui.start("#firebaseui-auth-container", uiconfig);
//     const auth = getAuth();
//     const handleSignOut = () => {

//       signOut(auth)
//         .then(() => {
//           localStorage.clear()
//           router.push({name:'login'})
//           user.value = null;
//           isSignedIn.value=false
//           console.log('Signed Out')
//         })
//         .catch((error) => {console.log(error)});
//     };
//     return {
//       user,
//       isSignedIn,
//       handleSignOut
//     };
//   },
// };
  name: "login-section",
  data() {
    return {
      dataLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useAnimeStore, ["handleLogin"]),
  },
  created(){
    this.handleLogin()
  }

}
</script>

<template>
   <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="min-height: 100vh; height: 100%"
  >
    <div class="card mb-3 col-md-8 border">
      <div class="row g-0">
        <div class="col-md-7">
          <img
            src="https://cdn.gamebrott.com/wp-content/uploads/2022/06/Yae-Miko-Genshin-Impact-Fanart-5.jpg"
            class="img-fluid rounded-start h-100"
            alt="..."
          />
        </div>
        <div class="col-md-5 d-flex justify-content-center bg-white">
          <div class="col-md-8">
            <h2 class="text-center mt-5">Login Anime Lover</h2>
            <form action="" @submit.prevent="handleLogin(dataLogin)">
              <label for="email" class="mt-5"><h2>Email</h2></label>
              <input
                type="email"
                class="form-control"
                name="email"
                v-model="dataLogin.email"
              />
              <label for="password" class="mt-5"><h2>Password</h2></label>
              <input
                type="password"
                class="form-control"
                name="password"
                v-model="dataLogin.password"
              />
              <button class="btn btn-dark mt-5 form-control mb-2">
                <h2>Login</h2>
              </button>
              <!-- <div class="d-flex justify-content-center mt-3">
                <GoogleLogin :callback="isgoogleSignIn" />
              </div> -->
              <div class="d-flex justify-content-center mt-4" style="color: #393f81">
                Don't have an account?
                <a
                  href="#!"
                  style="color: #393f81"
                  @click.prevent="$router.push('/register')"
                  >Register here</a
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
