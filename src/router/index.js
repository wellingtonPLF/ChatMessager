import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from '../views/HomePage/HomeComponent.vue'
import SignUpComponent from '@/views/AuthenticationPage/SignUpComponent/SignUpComponent.vue'
import SignInComponent from '@/views/AuthenticationPage/SignInComponent/SignInComponent.vue'
import ChatRoom from '@/views/ChatRoom/ChatRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignInComponent
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUpComponent
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: ChatRoom
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
