<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { useUserStore } from "../stores/user";

const store = useUserStore();
// store.renderButton();

// onMounted(() => {
//   window.checkLoginState = store.checkLoginState;
// });

async function logInWithFacebook() {
  await loadFacebookSDK(document, "script", "facebook-jssdk");
  await initFacebook();
  window.FB.login(function (response) {
    store.handleLoginResponse(response);
  });
  return false;
}

async function loadFacebookSDK(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}

async function initFacebook() {
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: "1643768512734802",
      cookie: true,
      xfbml: true,
      version: "v15.0",
    });
  };
}
</script>

<template>
  <main class="md:px-20">
    <section
      class="flex flex-col justify-center gap-12 h-[calc(100vh-17rem)] md:h-[calc(100vh-10.5rem)]"
    >
      <h2
        class="text-2xl text-center mx-auto md:mx-auto font-semibold w-3/4 md:w-full"
      >
        Sign in with Facebook to unlock all features
      </h2>

      <img
        src="../assets/all-devices-preview.png"
        alt=""
        class="md:w-1/2 mx-auto"
      />

      <div class="mx-auto">
        <div
          @click="logInWithFacebook"
          class="flex items-center justify-center w-full px-4 py-2 mt-2 space-x-3 text-sm text-center bg-blue-600 text-white transition-colors duration-200 transform border rounded-lg hover:bg-blue-700 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
            />
          </svg>
          <span class="text-sm text-white">Continue with Facebook</span>
        </div>
        <!-- <div
          class="fb-login-button"
          data-width=""
          data-size="large"
          data-button-type="continue_with"
          data-layout="default"
          data-auto-logout-link="false"
          data-use-continue-as="false"
          scope="public_profile,email"
          onlogin="checkLoginState()"
        ></div> -->
      </div>
    </section>
  </main>
</template>
