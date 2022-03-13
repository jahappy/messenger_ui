import { createApp } from 'vue'
import App from '../App.vue'
import HomeComponent from '../views/layout/HomeComponent';
import AboutComponent from '../views/layout/AboutComponent';

import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/about', component: AboutComponent },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
createApp(App).use(router).mount('#app')