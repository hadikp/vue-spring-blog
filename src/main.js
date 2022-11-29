import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './plugins/router'
import { createPinia } from 'pinia'

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
