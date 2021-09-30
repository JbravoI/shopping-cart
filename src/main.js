import { createApp } from 'vue';
import store from './store/index'
import router from './router';
import App from './App.vue';
import TheHeader from './components/layout/TheHeader.vue';
import ShoppingBanner from './components/layout/ShoppingBanner.vue';
import firebase from 'firebase/compat'
// import 'tailwindcss/tailwind.css'


 
const firebaseConfig = {
  apiKey: "AIzaSyBclP_2qx_WwnjGtU2cELVp5EgF9Mnthbs",
  authDomain: "shopeasy-d640d.firebaseapp.com",
  databaseURL: "https://shopeasy-d640d-default-rtdb.firebaseio.com",
  projectId: "shopeasy-d640d",
  storageBucket: "shopeasy-d640d.appspot.com",
  messagingSenderId: "92047333948",
  appId: "1:92047333948:web:d7ac0fb61237e702ad8139",
  measurementId: "G-CHT5B1K18Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const app = createApp(App);



app.component('the-header', TheHeader);
app.component('shopping-banner', ShoppingBanner);

app.use(store)
app.use(router);
app.mount('#app');
