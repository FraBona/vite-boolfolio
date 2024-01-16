import {createRouter, createWebHistory } from 'vue-router';

import Homepage from './pages/Homepage.vue';
import ProjectIndex from './pages/projects/index.vue';
import Contact from './pages/Contact.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/portfolio',
      name: 'projects.index',
      component: ProjectIndex
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contact
    }
  ]
});

export { router };
