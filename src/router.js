import {createRouter, createWebHistory} from "vue-router";
import UserRegisterForm from './components/FormAuth/UserRegisterForm';
import HomePage from './components/navPages/HomePage';
import CartInfo from './components/cart/CartInfo.vue'
import LoginAuth from './components/FormAuth/LoginAuth'
// import firebase from 'firebase/compat'



const routes = [
    {path: '/', name: 'home', component: HomePage, meta: {requiresAuth: true}},
    {path: '/register', component:UserRegisterForm},
    {path: '/cart', name: 'cart', component:CartInfo},
    {path: '/login', component:LoginAuth}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;