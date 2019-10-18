<template>
  <div>
    <div v-text="room.name"></div>
    <div class="d-flex align-center">
      <v-card class="mx-auto my-10" width="400" tile>
        <v-list shaped>
          <v-subheader>TEAM A</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item v-for="(player, i) in room.groupA.players" :key="i">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="player.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <h1>VS</h1>
      <v-card class="mx-auto my-10" width="400" tile>
        <v-list shaped>
          <v-subheader>TEAM B</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item v-for=" (player, i) in room.groupB.players" :key="i">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="player.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
    <div class="text-center">
      <v-btn rounded color="deep-purple accent-4" dark @click="startGame">Start Game!</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "game-room",
  data() {
    return {};
  },
  components: {},
  computed: mapState(["room"]),
  methods: {
    startGame() {
      this.$router.push("/arena");
    }
  }
};
</script>

<style scoped>
</style>