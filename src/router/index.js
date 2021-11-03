import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/home.vue'
import Layout from '@/Layout/index.vue'
import Login from '@/views/Login/Login.vue'
import Exercise from '@/views/exercise/exercise'
import KeyBoard from '@/views/keyboard/keyboard'

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Layout,
    children: [
      {
        path: "",
        component: () => Home,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: "/exercise",
    component: Layout,
    children: [
      {
        path: "",
        component: () => Exercise,
      },
    ],
  },
  {
    path: "/keyboard",
    component: Layout,
    children: [
      {
        path: "",
        component: () => KeyBoard,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
