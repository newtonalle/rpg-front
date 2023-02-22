<template>
  <div>
    <h1 v-if="player.name">Welcome "{{ player.name }}"</h1>
    <br />
    <br />
    <v-btn @click="redirect('status')" color="accent white--text">Status</v-btn>
    <br />
    <br />
    <v-btn @click="redirect('battles')" color="red darken-2 white--text"
      >Battles</v-btn
    >
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({}),

  methods: {
    ...mapActions(["getMe", "logout"]),
    logoutAndRedirect() {
      this.logout();
      this.$router.push({ name: "login" });
    },

    redirect(routeName) {
      this.$router.push({ name: routeName });
    },
  },

  computed: {
    ...mapState(["player"]),
  },

  async mounted() {
    await this.getMe();
  },
};
</script>