import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import io from 'socket.io-client'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: 'http://localhost:3000',
    socket: io('http://localhost:3000'),
    // groupA: {
    //   score: 120,
    //   players: []
    // },
    // groupB: {
    //   score: 0,
    //   players: []
    // },
    rooms: [],
    player: {
      id: 123344,
      name: "ghozi",
      score: 30
    },
    room: {
      name: 'bakso',
      description: `kuy masukk`,
      groupA: {
        score: 0,
        players: []
      },
      groupB: {
        score: 0,
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
    },
    ADD_PLAYER_TOGROUP(state) {
      if (state.groupA.players.length <= 3) {
        state.groupA.players.push(state.player)
      } else if (state.groupB.players.length <= 3) {
        state.groupB.players.push(state.player)
      }
    },
    UPDATE_ROOMS(state, payload) {
      state.rooms = payload
    },
    UPDATE_ROOM(state, payload) {
      state.room = payload
    }
  },
  actions: {
    findRoom(context) {
      axios({
        method: `get`,
        url: `${context.state.baseUrl}`
      })
        .then(({ data }) => {
          context.commit('UPDATE_ROOMS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    findByIdRoom(context, payload) {
      if (!payload) {
        socket.on('joingroup', function (id) {
          axios({
            method: 'get',
            url: `${context.state.baseUrl}/${id}`
          })
            .then(({ data }) => {
              context.commit('UPDATE_ROOM', data)
              router.push(`/room/${id}`)
            })
            .catch(err => {
              console.log(err)
            })
        })
      } else {
        axios({
          method: 'get',
          url: `${context.state.baseUrl}/${payload}`
        })
          .then(({ data }) => {
            context.commit('UPDATE_ROOM', data)
            router.push(`/room/${payload}`)
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    createRoom(context, payload) {
      let room = {
        name: payload.name,
        description: payload.description,
        status: `Waiting`,
        groupA: { score: 0, players: [context.state.player] },
        groupB: { score: 0, players: [] },
        roomMaster: {
          name: context.state.player.name,
          id: context.state.player.id
        }
      }

      axios({
        method: 'post',
        url: `${context.state.baseUrl}`,
        data: room
      })
        .then(({ data }) => {
          context.dispatch('findRoom')
          context.dispatch('findByIdRoom', data._id)
        })
        .catch(err => {
          console.log(err)
        })
    },
    removeRoom(context) {

    },
    updateStatusRoom(context) {

    },
    updatePlayer(context, id) {
      axios({
        method: 'patch',
        url: `${context.state.baseUrl}/player/${id}`,
        data: {
          player: context.state.player
        }
      })
        .then(() => {
          console.log('update success')
          context.dispatch('findRoom')
          router.push(`/room/${id}`)
          socket.emit('addplayer', context.state.player)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
