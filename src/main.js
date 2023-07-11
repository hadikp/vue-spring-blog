import { createApp } from 'vue'
import './style.css'
//import './scss/styles.scss'

import App from './App.vue'
import router from './plugins/router'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit)


/* import * as bootstrap from 'bootstrap'
import { Tooltip, Toast, Popover, Form } from 'bootstrap'; */

 

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(createPinia())
  .use(router)
  .mount('#app')
