import { createApp } from 'vue';
import store from './store/index'
import router from './router';
import App from './App.vue';
import TheHeader from './components/layout/TheHeader.vue';
import ShoppingBanner from './components/layout/ShoppingBanner.vue';





const app = createApp(App);



app.component('the-header', TheHeader);
app.component('shopping-banner', ShoppingBanner);

app.use(store)
app.use(router);
app.mount('#app');
