import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import VueAppleLogin from "vue-apple-login";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);
app.use(VueSweetalert2);

app.use(VueAppleLogin, {
  clientId: "com.example.signin",
  scope: "name email",
  redirectURI: "https://example.com",
  state: new Date().toISOString(),
  usePopup: true,
});

if (import.meta.env.NODE_ENV !== "production") {
  app.config.devtools = true;
}
app.config.devtools = true;

app.mount("#app");
