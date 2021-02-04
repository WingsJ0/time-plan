import { createApp } from 'vue'
import App from './app.vue'
import './registerServiceWorker'
import Router from './router'
import Store from './store'

createApp(App)
  .use(Store)
  .use(Router)
  .mount('#app')
