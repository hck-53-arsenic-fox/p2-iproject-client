import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vue3GoogleLogin, {
  clientId:
    "871370828651-j68eet8hate7no8c72erm1h0jbvhcu3r.apps.googleusercontent.com",
});

app.mount("#app");
