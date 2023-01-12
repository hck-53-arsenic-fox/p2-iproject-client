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
    "490795217386-iv133ous7mbev5okt3hplql5hs2u602f.apps.googleusercontent.com",
});

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.mount("#app");
