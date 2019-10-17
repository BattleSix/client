import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import io from 'socket.io-client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: 'http://localhost:3000',
    // socket: io('http://localhost:3000'),
    groupA: {
      score: 120,
      players: [
        {
          id: 123344,
          name: "ghozi",
          score: 30
        },
        {
          id: 198944,
          name: "andreas",
          score: 30
        },
        {
          id: 122392,
          name: "aldi",
          score: 30
        }
      ]
    },
    groupB: {
      score: 0,
      players: [
        {
          id: 123344,
          name: "kosasih",
          score: 30
        },
        {
          id: 198944,
          name: "botol",
          score: 30
        },
        {
          id: 122392,
          name: "mouse",
          score: 30
        }
      ]
    },
    rooms: [],
    player: {
      id: 123344,
      name: "ghozi",
      score: 30
    },
    room: {
      name: 'bakso',
      groupA: {
        score: 80,
        players: []
      },
      groupB: {
        score: 90,
        players: []
      },
      status: `waiting`,
      roomMaster: {
        id: 123344,
        name: "ghozi"
      }
    }
  },
  mutations: {
    CREATE_PLAYER(state, payload) {
      state.player = payload
      localStorage.setItem('token', payload.id)
    }
  },
  actions: {
    findRoom(context) {

    },
    findByIdRoom(context) {

    },
    createRoom(context) {

    },
    removeRoom(context) {

    },
    updateStatusRoom(context) {

    }
  },
  modules: {
  }
})
