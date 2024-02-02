import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';

const router = createRouter({
    history: createWebHistory({
        route: [
            {
                path: '/',
                name: 'home',
                component: HomePage
            },
            {
                path: '/',
                name: 'about',
                component: AboutPage
            },
        ]
    })
});
export { router };