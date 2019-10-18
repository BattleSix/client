<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn class="mx-2" fab dark color="indigo" v-on="on">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Create New Game Room</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Room title*" required v-model="name"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Room description" v-model="description"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="createRoom">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "create-room",
  data() {
    return {
      dialog: false,
      name: "",
      description: ""
    };
  },
  methods: {
    createRoom() {
      console.log({ name: this.name, description: this.description });
      this.$store.dispatch("createRoom", {
        name: this.name,
        description: this.description
      });
      this.dialog = false;
    }
  }
};
</script>

<style>
</style>