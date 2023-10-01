<template>
  <div>
    <v-skeleton-loader v-if="loading" type="card-avatar, article, actions">
    </v-skeleton-loader>

    <div v-else-if="!currentBattle.id">
      <new-battle @update="update()" :currentPreBattle="currentPreBattle" />
    </div>
    <div v-else>
      <current-battle @update="update()" :currentBattle="currentBattle" />
    </div>

    <v-snackbar v-model="snackbar">
      <p>
        {{ battleWinner }} Won!</p>
      <p v-if="playerWon">+{{ experienceGained }}xp</p>
      <template v-slot:action="{ attrs }">
        <v-btn color="yellow" text v-bind="attrs" @click="returnToMenu">
          To Menu
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import NewBattle from "./components/NewBattle.vue";
import CurrentBattle from "./components/CurrentBattle.vue";
export default {
  components: { NewBattle, CurrentBattle },
  data: () => ({
    loading: false,
    snackbar: false,
    isInBattle: true,
    experienceGained: 0,
    playerWon: false

  }),

  methods: {
    ...mapActions(["getCurrentBattle", "getCurrentPreBattle", "findBattleById"]),
    async update() {
      const oldCurrentBattle = this.currentBattle
      this.loading = true;
      await this.getCurrentBattle();
      await this.getCurrentPreBattle();
      if (oldCurrentBattle.id && !this.currentBattle.id) {
        await this.findBattleById(oldCurrentBattle.id);
        console.log(this.battle)
        this.experienceGained = this.battle.experienceGained
        this.playerWon = this.battle.playerWon
        this.snackbar = true
      }

      this.loading = false;
    },
    returnToMenu() {
      this.snackbar = false
      this.$router.push({ name: "home" });
    }
  },


  computed: {
    ...mapState(["currentBattle", "currentPreBattle", "battle"]),
    battleWinner() {
      if (this.playerWon) {
        return "Player";
      } else {
        return "Monster";
      }
    },
  },

  async mounted() {
    this.loading = true;
    await this.getCurrentBattle();
    await this.getCurrentPreBattle();
    this.loading = false;
  },
};
</script>