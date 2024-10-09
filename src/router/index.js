import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/layout/layout.vue'),
      children: [
        {
          path: '/html',
          redirect: '/html/version',
          children: [
            {
              path: '/html/version',
              component: () =>
                import('@/views/html/Visual Design/html-Version.vue')
            }
          ]
        },
        {
          path: '/css',
          children: [
            {
              path: '/css/button',
              component: () =>
                import('@/views/css/Active-button/css-button.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
