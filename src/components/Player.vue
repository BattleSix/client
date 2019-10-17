<template>
  <div class="form-player">
    <form @submit.prevent="createUsername">
      <input type="text" placeholder="Username" v-model="username" />
      <input type="submit" value="Go!!" />
    </form>
  </div>
</template>

<script>
export default {
  name: "username",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    createUsername() {
      const library = "zxcvbnmlkjhgfdsaqwertyuiop0987654321";
      const length = library.length;
      let id = "";
      for (let i = 0; i < 6; i++) {
        id += library[Math.floor(Math.random() * length)];
      }

      let player = {
        id: id,
        username: this.username,
        score: 0
      };

      this.$store.commit("CREATE_PLAYER", player);
      this.$router.push("/room");
    }
  }
};
</script>

<style>
</style>