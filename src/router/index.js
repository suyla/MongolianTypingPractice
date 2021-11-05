import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/home.vue'
import Layout from '@/Layout/index.vue'
import Login from '@/views/Login/Login.vue'
import Exercise from '@/views/exercise/exercise'
import KeyBoard from '@/views/keyboard/keyboard'
import Test from '@/views/test/test'
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
  {
    path: "/test",
    component: Layout,
    children: [
      {
        path: "",
        component: () => Test,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
