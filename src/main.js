import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import vue3GoogleLogin from "vue3-google-login";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(vue3GoogleLogin, {
  clientId:
    "774674133889-nrp72aef107gei08mkial8ttl7tmld5g.apps.googleusercontent.com",
});

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.mount("#app");
