<template>
  <div class="room-card">
    <div class="d-flex flex-wrap mx-10 my-10">
      <v-card
        class="mx-20"
        width="400"
        height="230"
        outlined
        v-for="(room) in rooms"
        :key="room._id"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">GAME ROOM</div>
            <v-list-item-title class="headline mb-1" v-text="room.name">Ghozi's room</v-list-item-title>
            <v-list-item-subtitle v-text="room.description">Sini lu kalo berani!</v-list-item-subtitle>
            <v-list-item-action-text class="title">
              <i class="fas fa-users" style="color: grey"></i>5/6
            </v-list-item-action-text>
            <v-list-item-action-text class="title">
              <i class="fas fa-crown" style="color:gold;"></i>
              {{room.roomMaster.name}}
            </v-list-item-action-text>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" src>
            <v-img :src="getImage(room.roomMaster.name)"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text @click="joinRoom(room._id)">Join Room</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "room-card",
  data() {
    return {};
  },
  methods: {
    joinRoom(id) {
      this.$store.dispatch("updatePlayer", id);
    },
    getImage(name) {
      return `https://api.adorable.io/avatars/285/${name}.png`;
    }
  },
  props: ["rooms"]
};
</script>

<style>
</style>