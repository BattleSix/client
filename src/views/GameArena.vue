<template>
  <div id="game-arena">
    <div id="score-box">
      <v-card min-width="200" class="mx-auto color">
        <v-container class="content">
          <h5>Team A</h5>
          <h1>{{ room.groupA.score }}</h1>
        </v-container>
      </v-card>

      <div class="timer">
        <h1>5</h1>
        <!-- INI DIISI TIMER AMBIL DARI STORE -->
      </div>

      <v-card min-width="200" class="mx-auto color">
        <v-container class="content">
          <h5>Team B</h5>
          <h1>{{ room.groupB.score }}</h1>
        </v-container>
      </v-card>
    </div>
    <div style="height:1vh;"></div>
    <div id="arena">
      <v-row dense>
        <TeamBoard col="6" :teams="room.groupA.players"></TeamBoard>
        <FlipGame></FlipGame>
        <TeamBoard col="6" :teams="room.groupB.players"></TeamBoard>
      </v-row>
    </div>
  </div>
</template>

<script>
import TeamBoard from "../components/TeamBoard";
import FlipGame from "../components/FlipGame";
import { mapState } from "vuex";
export default {
  name: "game-arena",
  components: {
    TeamBoard,
    FlipGame
  },
  data() {
    return {};
  },
  computed: mapState(["room"])
};
</script>

<style scoped>
#score-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2vh;
}
#game-arena {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
}
#score-box {
  height: 15vh;
  /* background-color: red; */
  margin: 0;
}
#arena {
  height: 80vh;
  margin: 0;
  /* background-color: blue */
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.color {
  background-color: #99c24d;
}
.timer h1 {
  font-weight: 700;
  font-size: 72px;
}
</style>
