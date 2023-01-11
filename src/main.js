import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
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

app.use(router);
app.use(pinia);

app.mount("#app");
