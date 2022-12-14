import { createApp } from 'vue'
import './style.css'
//import './scss/styles.scss'

import App from './App.vue'
import router from './plugins/router'
import { createPinia } from 'pinia'

/* import * as bootstrap from 'bootstrap'
import { Tooltip, Toast, Popover, Form } from 'bootstrap'; */

 

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
