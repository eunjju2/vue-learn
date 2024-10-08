import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', //http://localhost:5173/
      name: 'home',
      component: HomeView // Workspace/vueex/src/view/HomeView.vue
    },
    {
      path: '/about', //http://localhost:5173/about
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue') // Workspace/vueex/src/view/HomeView.vue
    },
    {
      path: '/binding', //http://localhost:5173/binding
      name: 'binding',
      component: () => import('../views/DataBinding.vue') // Workspace/vueex/src/view/DataBinding.vue
    }
  ]
})

export default router
