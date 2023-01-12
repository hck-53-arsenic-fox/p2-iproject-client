import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import router from "../router";
import Swal from "sweetalert2";

export const useUserStore = defineStore("user", () => {
  const state = reactive({
    email: "",
    id: "",
    name: "",
    access_token: "",
  });

  //   function renderButton() {
  //     window.fbAsyncInit = function () {
  //       FB.init({
  //         appId: "1643768512734802",
  //         cookie: true,
  //         xfbml: true,
  //         version: "v15.0",
  //       });

  //       FB.AppEvents.logPageView();
  //     };

  //     (function (d, s, id) {
  //       var js,
  //         fjs = d.getElementsByTagName(s)[0];
  //       if (d.getElementById(id)) {
  //         return;
  //       }
  //       js = d.createElement(s);
  //       js.id = id;
  //       js.src = "https://connect.facebook.net/en_US/sdk.js";
  //       fjs.parentNode.insertBefore(js, fjs);
  //     })(document, "script", "facebook-jssdk");
  //   }

  function handleLoginResponse(response) {
    if (response.status === "connected") {
      state.access_token = response.authResponse.accessToken;
      localStorage.setItem("access_token", state.access_token);

      FB.api("/me", { fields: "email, name" }, function (response) {
        state.email = response.email;
        state.id = response.id;
        state.name = response.name;

        router.push("/");
        const toast = useToast();
        toast.success(`Howdy ${response.name}!`, {
          timeout: 3000,
          hideProgressBar: true,
        });
      });
    }
  }

  //   function checkLoginState() {
  //     FB.getLoginStatus(function (response) {
  //       statusChangeCallback(response);
  //     });
  //   }

  //   function statusChangeCallback(response) {
  //     console.log(response);

  //     if (response.status === "connected") {
  //       state.access_token = response.authResponse.accessToken;
  //       localStorage.setItem("access_token", state.access_token);

  //       FB.api("/me", { fields: "email, name" }, function (response) {
  //         state.email = response.email;
  //         state.id = response.id;
  //         state.name = response.name;

  //         router.push("/");
  //         const toast = useToast();
  //         toast.success("Howdy!");
  //       });
  //     }
  //   }

  function logout() {
    Swal.fire({
      title: "Do you want to log out?",
      // text: "Hope to see you back soon",
      showCancelButton: true,
      confirmButtonColor: "#FB923C",
      cancelButtonColor: "#bfbfbf",
      confirmButtonText: "Logout",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        FB.getLoginStatus(function (response) {
          FB.logout(function (response) {
            router.push("/login");
            state.email = "";
            state.id = "";
            state.name = "";
            state.access_token = "";
            localStorage.clear();
            const toast = useToast();
            toast.success("You've been logged out", {
              timeout: 3000,
              hideProgressBar: true,
            });
          });
        });
      }
    });
  }

  return { state, logout, handleLoginResponse };
});
