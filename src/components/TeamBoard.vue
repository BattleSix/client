<template>
  <v-card max-width="400" class="mx-auto">
    <v-container>
      <v-row dense>
        <PlayerCard
          v-for="(player, i) in teams"
          :key="i"
          cols="12"
          :player="player"
          :randomcolor="i"
          class="card"
        ></PlayerCard>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import PlayerCard from "./PlayerCard";

export default {
  name: "teamBoard",
  props: ["teams"],
  components: {
    PlayerCard
  },
  data: () => ({})
};
</script>

<style scoped>
.card {
  margin: 1vh !important;
}
</style>