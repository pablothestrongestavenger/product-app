import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index'
import store from './store/store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App).use(router).use(store).mount('#app')

