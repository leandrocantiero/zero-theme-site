// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'about',
          name: 'Sobre',
          component: () => import('@/views/about/Index.vue'),
          meta: { src: require('@/assets/about.jpg') },
        },
        {
          path: 'contact-us',
          name: 'Contato',
          component: () => import('@/views/contact-us/Index.vue'),
          meta: { src: require('@/assets/contact.jpg') },
        },
        {
          path: 'price',
          name: 'Preço',
          component: () => import('@/views/price/Index.vue'), 
          meta: { src: require('@/assets/contact.jpg') },
        },
        {
          path: 'news',
          name: 'Novidades',
          component: () => import('@/views/news/Index.vue'),
          meta: { src: require('@/assets/contact.jpg') },
        },
        {
          path: 'galery',
          name: 'Galeria',
          component: () => import('@/views/galery/Index.vue'),
          meta: { src: require('@/assets/contact.jpg') },
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404/Index.vue'),
        },
      ],
    },

  ],
})

export default router
