<template>
  <div>
    <CreateRoom />
    <RoomCard />
  </div>
</template>

<script>
import RoomCard from "@/components/RoomCard";
import CreateRoom from "@/components/CreateRoom";
export default {
  name: "lobby",
  data() {
    return {};
  },
  components: {
    RoomCard,
    CreateRoom
  },
  methods: {}
};
</script>

<style>
</style>