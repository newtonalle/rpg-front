<template>
  <div>
    <h1>Welcome {{ user.name }}!</h1>

    <br />

    <v-divider :thickness="20"></v-divider>

    <h2>Choose a Player</h2>

    <br />

    <v-row>
      <v-col
        cols="4"
        v-for="(loopPlayer, index) in user.players"
        :key="`index-${index}-players`"
      >
        <player-card-home
          :selected="loopPlayer.id === player.id"
          :player="loopPlayer"
          @selectPlayer="selectPlayerAndRedirect"
        />
      </v-col>

      <v-col cols="4">
        <new-player-card :classes="classes" @createPlayer="createPlayer" />
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar">
      Player names must have from 3-30 characters!

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
import PlayerCardHome from "./components/PlayerCardHome.vue";
import NewPlayerCard from "./components/NewPlayerCard.vue";
export default {
  data: () => ({
    snackbar: false,
  }),

  components: { PlayerCardHome, NewPlayerCard },

  methods: {
    ...mapActions([
      "getMe",
      "getClasses",
      "logout",
      "selectCurrentPlayer",
      "getCurrentPlayer",
      "createNewPlayer",
    ]),
    logoutAndRedirect() {
      this.logout();
      this.$router.push({ name: "login" });
    },

    redirect(routeName) {
      this.$router.push({ name: routeName });
    },

    async selectPlayerAndRedirect(playerId) {
      await this.selectCurrentPlayer(playerId);
      await this.getCurrentPlayer();
      if (this.player) {
        this.$router.push({ name: "status" });
      }
    },

    async createPlayer(playerInfo) {
      await axios
        .post(
          `/users/${this.user.id}/players/classes/${playerInfo.selectedClassId}`,
          { name: playerInfo.playerName },
          {
            headers: { Authorization: `Bearer ${this.token}` },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          this.snackbar = true;
        });
      await this.getMe();
    },
  },

  computed: {
    ...mapState(["player", "user", "classes", "token"]),
  },

  async mounted() {
    await this.getMe();
    await this.getClasses();
  },
};
</script>

<style>
.v-btn {
  width: 100%;
}
#player-selected {
  border-color: #d2ead3;
  border-width: 4px;
}
.player-selection-card {
  border-radius: 10px 100px / 120px !important;
}
</style>