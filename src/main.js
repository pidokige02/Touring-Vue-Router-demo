// import { createApp, reactive } from 'vue' // commented out from lesson 10
import { createApp } from 'vue' 
import App from './App.vue'
import router from './router'
// import store from './store' // commented out from lesson 10
import GStore from './store'
import 'nprogress/nprogress.css'

// const GStore = reactive({ flashMessage: '' }) //  commented out from lesson 10 
// Create a global(reactive) object to share across multiple components

createApp(App)
  // .use(store) // commented out from lesson 10
  .use(router)
  .provide('GStore', GStore) // make this object available for componnts in our app to use(inject)
  .mount('#app')
