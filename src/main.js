import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import elementui from '../node_modules/vue-cli-plugin-element'

createApp(App).use(router).mount('#app')
App.use(elementui)
