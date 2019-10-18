import Vue from 'vue'
import VueRouter from 'vue-router'
import GameArena from '../views/GameArena.vue'
import LandingPage from '../views/LandingPage.vue'
import Lobby from '../views/Lobby.vue'
import GameRoom from '../views/GameRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/arena/:id',
    name: 'game-arena',
    component: GameArena
  },
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
    path: '/room/:id',
    name: 'game-room',
    component: GameRoom
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
