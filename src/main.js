import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import Toast, { POSITION } from "vue-toastification";
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);

const options = {
  // You can set your default options here
  position: POSITION.TOP_LEFT,
};

app.use(Toast, options);

app.mount("#app");

const toast = useToast();
const BASE_URL = "http://localhost:3000";

export { BASE_URL, toast };
