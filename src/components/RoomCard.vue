<template>
  <div class="room-card d-flex my-10">
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">GAME ROOM</div>
          <v-list-item-title class="headline mb-1">Ghozi's Game</v-list-item-title>
          <v-list-item-subtitle>Sini lu kalo berani!</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" src>
          <v-img src="https://api.adorable.io/avatars/285/ghozi.png"></v-img>
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
</template>

<script>
export default {
  name: "room-card",
  data() {
    return {};
  }
};
</script>

<style>
</style>