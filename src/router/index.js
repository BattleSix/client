import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Lobby from '../views/Lobby.vue'
import GameRoom from '../views/GameRoom.vue'
import GameArena from '../views/GameArena.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: LandingPage
  },
  {
    path: '/lobby',
    name: 'lobby',
    component: Lobby
  },
  {
    path: '/room',
    name: 'game-room',
    component: GameRoom
  },
  {
    path: '/arena',
    name: 'game-arena',
    component: GameArena
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
