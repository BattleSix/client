<template>
  <div class="form-player d-flex justify-center align-center my-10">
    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="username"
        :counter="10"
        :rules="usernameRules"
        label="Username"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">Submit</v-btn>
      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "register",
  data: () => ({
    valid: true,
    username: "",
    usernameRules: [
      v => !!v || "Username is required",
      v => (v && v.length <= 10) || "Username must be less than 10 characters",
      v => (v && v.length > 3) || "Username must be at least 3 characters"
    ]
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        let library = "zxcvbnmlkjhgfdsaqwertyuiop0987654321";
        const length = library.length;
        let id = "";
        for (let i = 0; i < 7; i++) {
          id += library[Math.floor(Math.random() * length)];
        }

        let player = {
          id: id,
          username: this.username,
          score: 0
        };
        this.$store.commit("CREATE_PLAYER", player);
        this.snackbar = true;
        this.$router.push("/lobby");
      }
    },
    reset() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style scoped>
#form-player {
  margin: auto;
}
</style>