// main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index'
import store from './store/store'

// Import Bootstrap JavaScript components
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router).use(store).mount('#app')
