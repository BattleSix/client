<template>
  <div>
    <CreateRoom />
    <RoomCard :rooms="rooms" />
  </div>
</template>

<script>
import RoomCard from "@/components/RoomCard";
import CreateRoom from "@/components/CreateRoom";
export default {
  name: "lobby",
  data() {
    return {
      rooms: this.$store.state.rooms
    };
  },
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