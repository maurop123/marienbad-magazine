import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { vBlog } from 'mauromadeit-vue-commons'

Vue.use(Vuetify)

Vue.use(vBlog, {
  router,
  store,
  destination: 'marienbad-magazine',
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
