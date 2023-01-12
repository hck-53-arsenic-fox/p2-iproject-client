import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import vue3GoogleLogin from 'vue3-google-login'
const app = createApp(App)

app.use(vue3GoogleLogin, {
    clientId: '555210930757-ud0ftaubcgr663si7elhc3gnljue6sca.apps.googleusercontent.com'
  })
const pinia = createPinia()

pinia.use(({ store }) => {
store.router = markRaw(router)
})
app.use(router)
app.use(pinia)
app.mount('#app')
