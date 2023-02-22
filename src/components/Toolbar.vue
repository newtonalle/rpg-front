<template>
  <v-app-bar color="primary white--text" dense app>
    <v-app-bar-title>RPG</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon :to="{ name: 'home' }">
      <v-icon color="white"> mdi-home </v-icon>
    </v-btn>
    <v-btn icon :to="{ name: 'status' }">
      <v-icon color="white">mdi-bag-personal</v-icon>
    </v-btn>
    <v-btn icon :to="{ name: 'currentBattle' }">
      <v-icon color="white">mdi-fencing</v-icon>
    </v-btn>
    <v-btn icon :to="{ name: 'battlesLog' }">
      <v-icon color="white">mdi-history</v-icon>
    </v-btn>
    <v-btn icon @click="logoutAndRedirect">
      <v-icon color="white"> mdi-door </v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["logout"]),
    logoutAndRedirect() {
      this.logout();
      this.$router.push({ name: "login" });
    },
  },
};
</script>