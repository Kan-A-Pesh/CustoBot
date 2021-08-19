import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import DiscordCallback from '../views/DiscordCallback.vue';
import env from '../../../config';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/discord-callback',
    name: 'Discord Callback',
    component: DiscordCallback,
  },
];

const router = createRouter({
  history: createWebHistory(env.BASE_URL),
  routes,
});

export default router;
