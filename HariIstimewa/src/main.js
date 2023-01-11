import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import vue3GoogleLogin from 'vue3-google-login'

import App from "./App.vue";
import router from "./router";

import "./style.css";

const app = createApp(App);
const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(vue3GoogleLogin, {
    clientId: '729436622556-gkk50i1q1k099u2tnroi0quo0730kl73.apps.googleusercontent.com',
});
    
app.use(router);
app.use(pinia);

app.mount("#app");
