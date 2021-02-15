/**
 * @name Main
 */

import { createApp } from 'vue'
import App from './app.vue'
import './registerServiceWorker'
import Router from './router'
import Store from './store'
import Directive from './directive'

let app = createApp(App)

for (let i in Directive) {
  app.directive(i, Directive[i])
}

app
  .use(Store)
  .use(Router)
  .mount('#app')
