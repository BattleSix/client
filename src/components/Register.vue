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

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Submit</v-btn>
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
    validate() {
      if (this.$refs.form.validate()) {
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