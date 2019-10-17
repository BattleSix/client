<template>
  <v-app>
    <NavBar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import Register from "@/components/Register";
export default {
  name: "App",
  components: {
    NavBar,
    Register
  },
  data: () => ({
    //
  })
};
</script>
