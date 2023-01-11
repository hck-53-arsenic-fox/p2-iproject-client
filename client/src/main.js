import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import 'mdb-vue-ui-kit/css/mdb.min.css'
import './assets/main.css'
import App from './App.vue'
import router from './router'
const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
store.router = markRaw(router)
})
app.use(router)
app.use(pinia)
app.use(vue3GoogleLogin, {
    clientId: "870672470945-iqumbg6ivbrrqurlssufgbferb116jji.apps.googleusercontent.com"
  })
app.mount('#app')
