import Vue from 'vue'
import VueRouter from 'vue-router'

import PostsIndex from '../views/PostsIndex.vue'
import PostsShow from '../views/PostsShow.vue'
import PostsCreate from '../views/PostsCreate.vue'
import PostsEdit from '../views/PostsEdit.vue'

import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'



Vue.use(VueRouter)

  const routes = [
  {path: '/', name: 'home', component: PostsIndex},

  {path: '/posts', name: 'posts-index', component: PostsIndex},
  {path: '/posts/new', name: 'posts-create', component: PostsCreate},
  {path: '/posts/:id', name: 'posts-show', component: PostsShow},
  {path: '/posts/:id/edit', name: 'posts=edit', component: PostsEdit},

  {path: '/signup', name: 'signup', component: Signup},
  {path: '/login', name: 'login', component: Login},
  {path: '/logout', name: 'logout', component: Logout}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
