import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import About from '@/components/About';
import Projects from '@/components/Projects';
import PlanetBuilder from '@/components/PlanetBuilder';

Vue.use(Router)

export default new Router({
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
    }
  ]
})
