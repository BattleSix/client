<template>
  <div class="room-card">
    <div class="text-center d-flex justify-end mx-10 my-10">
      <v-btn class="mx-2" fab dark color="indigo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </div>
    <div class="d-flex my-10">
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">GAME ROOM</div>
            <v-list-item-title class="headline mb-1">Ghozi's Game</v-list-item-title>
            <v-list-item-subtitle>Sini lu kalo berani!</v-list-item-subtitle>
            <v-list-item-action-text class="title">
              <i class="fas fa-users" style="color: grey"></i>5/6
            </v-list-item-action-text>
            <v-list-item-action-text class="title">
              <i class="fas fa-crown" style="color:gold;"></i>ghozi
            </v-list-item-action-text>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" src>
            <v-img src="https://api.adorable.io/avatars/285/ghozi.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text @click="joinRoom">Join Room</v-btn>
        </v-card-actions>
      </v-card>

      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">GAME ROOM</div>
            <v-list-item-title class="headline mb-1">Andreas's Battle Saga</v-list-item-title>
            <v-list-item-subtitle>3 vs 3 fast game</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey">
            <v-img src="https://api.adorable.io/avatars/285/andreas.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text>Join Room</v-btn>
        </v-card-actions>
      </v-card>

      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">GAME ROOM</div>
            <v-list-item-title class="headline mb-1">Aldi's Room</v-list-item-title>
            <v-list-item-subtitle>Cepetan masuk!!!!</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey">
            <v-img src="https://api.adorable.io/avatars/285/aldi.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text>Join Room</v-btn>
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
    joinRoom() {
      this.$router.push("/room");
    }
  }
};
</script>

<style>
</style>