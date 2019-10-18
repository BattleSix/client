<template>
  <div>
    <div class="d-flex align-center">
      <v-card class="mx-auto my-10" width="400" tile>
        <v-list shaped>
          <v-subheader>TEAM A</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in groupA" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.username"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <h1>VS</h1>
      <v-card class="mx-auto my-10" width="400" tile>
        <v-list shaped>
          <v-subheader>TEAM B</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in groupB" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.username"></v-list-item-title>
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
export default {
  name: "game-room",
  data() {
    return {
      groupA: [
        { username: "Andreas", icon: "mdi-account" },
        { username: "Aldi", icon: "mdi-account" },
        { username: "Ghozi", icon: "mdi-account" }
      ],
      groupB: [
        { username: "Ayu", icon: "mdi-account" },
        { username: "Nucky", icon: "mdi-account" },
        { username: "Rizky", icon: "mdi-account" }
      ]
    };
  },
  components: {},
  methods: {
    startGame() {
      this.$router.push("/arena");
    }
  }
};
</script>

<style scoped>
h1 {
}
</style>