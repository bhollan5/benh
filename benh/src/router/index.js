import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import About from '@/components/About';
import Projects from '@/components/Projects';
import PlanetBuilder from '@/components/PlanetBuilder';
import Cognote from '@/components/Cognote';
import NotFound from '@/components/NotFound';
import automate from '@/components/automate/automate';

import hacksuSponsors from '@/components/hacksuSponsors';

import lights from '@/components/lights';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/planetmaker',
      name: 'planetBuilder',
      component: PlanetBuilder
    },
    {
      path: '/cognote/*',
      name: 'Cognote',
      component: Cognote
    },
    {
      path: '/temp',
      name: 'hacksuSponsorsIdea',
      component: hacksuSponsors
    },
    {
      path: '/cognote',
      name: 'CognoteHome',
      component: Cognote
    },
    
    {
      path: '/automate',
      name: 'AutoMate',
      component: automate
    },
    
    {
      path: '/lights',
      name: 'lights',
      component: lights
    },
    
    {
      path: '/*',
      name: '404',
      component: NotFound
    },
    
  ]
})
