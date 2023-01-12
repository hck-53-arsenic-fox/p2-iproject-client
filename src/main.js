import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import vue3GoogleLogin from "vue3-google-login";
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
// import Vuetify from "vuetify";
// import v3gmaps from "v3-gmaps";
// import { vue3Debouonce } from "vue3-debounce";


import App from "./App.vue";
import router from "./router";

import "v3-gmaps/dist/style.css";
import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router);
});
pinia.use(piniaPluginPersistedState)
app.use(vue3GoogleLogin, {
    clientId: '1071224371703-8noc4baa30srkagnt6rrnphu6cpk7hse.apps.googleusercontent.com'
})
app.use(router);
app.use(pinia);

app.mount("#app");
