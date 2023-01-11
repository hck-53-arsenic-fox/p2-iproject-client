import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(vue3GoogleLogin, {
    clientId: '291333338394-h4h4hfakg29br73g84m3ohb19av6m5vh.apps.googleusercontent.com'
  })

pinia.use(({ store }) => {
    store.router = markRaw(router)
})


app.use(pinia)
app.use(router)

app.mount('#app')