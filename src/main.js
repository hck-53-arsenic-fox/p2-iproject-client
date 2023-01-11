import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();
const vuetify = createVuetify({
	components,
	directives,
});

pinia.use(({ store }) => {
	store.router = markRaw(router);
});

app.use(pinia);
app.use(vuetify);
app.use(router);

app.mount("#app");
