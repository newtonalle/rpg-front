<template>
  <div>
    <h1 v-if="player.name">Welcome "{{ player.name }}"</h1>
    <router-link :to="{ name: 'status' }">Status</router-link>
    <v-btn @click="logoutAndRedirect" color="red">Logout</v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({ player: {} }),

  methods: {
    ...mapActions(["getMe", "logout"]),
    logoutAndRedirect() {
      this.logout();
      this.$router.push({ name: "login" });
    },
  },

  async mounted() {
    this.player = await this.getMe();
  },
};
</script>