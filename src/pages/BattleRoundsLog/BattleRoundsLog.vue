<template>
  <div>
    <v-skeleton-loader v-if="loading" type="card-avatar, article, actions">
    </v-skeleton-loader>
    <div v-else>
      <h1>Battle #{{ battle.id }}</h1>
      <h2>{{ battle.player.name }} V.S. {{ battle.monster.name }}</h2>
      <p>Happened at {{ battle.createdAt }}</p>
      <br />
      <v-container>
        <v-row>
          <div v-for="(round, index) in battle.rounds" :key="`round-${index}`">
            <v-col>
              <round-card :playerWon="battle.playerWon" :round="round" :index="index" />
            </v-col>
          </div>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import RoundCard from "./components/RoundCard.vue"
export default {

  data: () => ({ loading: false }),

  components: {
    RoundCard
  },

  methods: {
    ...mapActions(["findBattleById"]),
  },

  computed: {
    ...mapState(["battle"]),
  },

  async mounted() {
    this.loading = true;
    const battleID = this.$route.params.battleId
    await this.findBattleById(battleID);
    this.loading = false;
  },
};
</script>