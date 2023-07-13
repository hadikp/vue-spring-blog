import { createApp } from 'vue'
import './style.css'
//import './scss/styles.scss'
//import '~bootstrap/dist/css/bootstrap.css'

import App from './App.vue'
import router from './plugins/router'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { VuePaginationTw } from 'vue-pagination-tw'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit)


/* import * as bootstrap from 'bootstrap'
import { Tooltip, Toast, Popover, Form } from 'bootstrap'; */

 

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('Vue-Pagination-Tw', VuePaginationTw)
  .use(router)
  .use(createPinia())
  .mount('#app')
