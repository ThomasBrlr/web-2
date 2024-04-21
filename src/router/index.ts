import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from "../pages/HomeView.vue";
import ContactView from "../pages/ContactView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/contact', component: ContactView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router