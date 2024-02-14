import { createWebHistory, createRouter } from 'vue-router'
import List from './components/List.vue'
import intro from './components/Introduce.vue'
import detail from './components/Detail.vue'
import author from './components/Auther.vue'
import comment from './components/Comment.vue'

const routes = [
  {
    path: '/list',
    component: List,
  },
  {
    path: '/',
    component: intro,
  },
  {
    path: '/detail/:id(\\d+)',
    component: detail,
    children: [
      {
        path: 'author',
        component: author,
      },
      {
        path: 'comment',
        component: comment,
      },
    ],
  },
  {
    path: '/:anything(.*)',
    component: intro,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
