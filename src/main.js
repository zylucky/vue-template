import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)

console.log(process.env.VUE_APP_BASE_API)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
