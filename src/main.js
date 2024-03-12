import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { firebaseConfig } from './firebaseConfig'
import router from './router'
import firebase from "firebase";

firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
