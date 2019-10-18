<template>
  <div>
    <CreateRoom />
    <RoomCard :rooms="rooms" />
  </div>
</template>

<script>
import RoomCard from "@/components/RoomCard";
import CreateRoom from "@/components/CreateRoom";
import { mapState } from "vuex";
export default {
  name: "lobby",
  data() {
    return {};
  },
  computed: mapState(["rooms"]),
  components: {
    RoomCard,
    CreateRoom
  },
  methods: {},
  created() {
    this.$store.dispatch("findRoom");
  }
};
</script>

<style>
</style>