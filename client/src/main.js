import { createApp, markRaw } from 'vue' 
import { createPinia } from 'pinia'
import App from './App.vue' 
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import "toastify-js/src/toastify.css"


const app = createApp(App) 
const pinia = createPinia()

pinia.use(({ store }) => { store.router = markRaw(router)
})
app.use(router) 

app.use(pinia)

app.use(vue3GoogleLogin, {
    clientId: '979821927507-iechlbkb247jutbo6rf1bosambj7ch6v.apps.googleusercontent.com'
  })

app.mount('#app')