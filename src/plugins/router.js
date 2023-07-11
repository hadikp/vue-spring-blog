import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {path: '', name: 'home', component: () => import('../views/Home.vue')},
  {path: '/about', name: 'about', component: () => import('../views/About.vue')},
  {path: '/user', name: 'user', component: () => import('../views/User.vue')},
  {path: '/post', name: 'post', component: () => import('../views/Post.vue')},
  {path: '/blog', name: 'blog', component: () => import('../views/Blog.vue')},
  {path: '/hirlevel', name: 'hirlevel', component: () => import('../views/Hirlevel.vue')},
  {path: '/updatePost/:id?', name: 'update-post', component: () => import('../views/UpdatePost.vue')}
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router