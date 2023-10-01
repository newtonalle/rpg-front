<template>
  <div>
    <v-skeleton-loader v-if="loading" type="card-avatar, article, actions">
    </v-skeleton-loader>
    <div v-else>
      <v-container class="new-battle-stepper-container">
        <v-stepper v-model="newBattleStep">
          <v-stepper-header>
            <v-stepper-step :complete="newBattleStep > 1" step="1"
              >New battle</v-stepper-step
            >
            <v-divider></v-divider>
            <v-stepper-step
              :editable="newBattleStep >= 2"
              :complete="newBattleStep > 2"
              step="2"
              >Choose Monster</v-stepper-step
            >
            <v-divider></v-divider>
            <v-stepper-step step="3"> Choose Equipment </v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <!-- step 1 -->
            <v-stepper-content step="1">
              <v-container class="battle-container">
                <v-row style="height: 100%">
                  <v-col align-self="center">
                    <v-btn @click="newPreBattleProcess()">New Battle</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-stepper-content>

            <!-- step 2 -->
            <v-stepper-content step="2">
              <v-container class="battle-container">
                <v-row
                  style="height: 33%"
                  v-for="(monster, index) in currentPreBattle.monster"
                  :key="`monster-${index}`"
                >
                  <v-col cols="4">
                    <player-card
                      v-if="index === 1"
                      :player="player"
                    ></player-card>
                  </v-col>
                  <v-col @click="confirmMonster" align-self="center" cols="4"
                    ><v-btn
                      color="primary"
                      :disabled="!selectedMonster.id"
                      v-if="index === 1"
                      >Choose Monster</v-btn
                    ></v-col
                  >
                  <v-col
                    cols="4"
                    v-on:dblclick="confirmMonster"
                    @click="selectMonster(monster)"
                  >
                    <monster-card
                      style="height: 100%"
                      :monster="monster"
                      :cardColor="`${cardSelected(monster)}`"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-stepper-content>

            <!-- step 3 -->
            <v-stepper-content step="3">
              <v-container class="battle-container">
                <v-row>
                  <v-col>
                    <v-btn block color="secondary" @click="reselectMonster"
                      >Choose another monster</v-btn
                    >
                  </v-col>
                  <v-col>
                    <v-btn color="primary" block @click="createNewBattle"
                      >Start battle</v-btn
                    >
                  </v-col>
                </v-row>
                <br />
                <br />
                <player-status :player="player" />
              </v-container>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-container>
    </div>
  </div>
</template>

<script>
import MonsterCard from "./MonsterCard.vue";
import PlayerStatus from "../../../components/PlayerStatus/PlayerStatus.vue";
import PlayerCard from "../../../components/PlayerStatus/components/PlayerCard.vue";
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    loading: false,
    newBattleStep: 1,
    selectedMonster: {},
  }),

  props: { currentPreBattle: Object },

  computed: {
    ...mapState(["player", "monsters"]),
  },

  components: { MonsterCard, PlayerStatus, PlayerCard },

  methods: {
    ...mapActions([
      "getMe",
      "getCurrentPlayer",
      "getMonsters",
      "createMonsters",
      "newBattle",
      "preBattleProcess",
    ]),

    cardSelected(monster) {
      if (this.selectedMonster.id === monster.id) {
        return "accent";
      }
      return "";
    },

    async createNewMonsters() {
      if (this.loading) return;
      this.loading = true;
      await this.createMonsters();
      await this.getMonsters();
      this.loading = false;

      this.newBattleStep = 2;
    },

    async newPreBattleProcess() {
      if (this.loading) return;
      this.loading = true;
      await this.preBattleProcess();
      this.$emit("update");
      this.loading = false;

      this.newBattleStep = 2;
    },

    async createNewBattle() {
      if (this.loading) return;
      this.loading = true;
      await this.newBattle(this.selectedMonster.id);
      this.$emit("update");
      this.loading = false;
    },

    selectMonster(monster) {
      this.selectedMonster = monster;
    },

    confirmMonster() {
      this.newBattleStep = 3;
    },

    reselectMonster() {
      this.newBattleStep = 2;
    },
  },

  async mounted() {
    this.loading = true;
    if (this.currentPreBattle.monster) {
      this.newBattleStep = 2;
    }
    await this.getMe();
    await this.getCurrentPlayer();
    await this.getMonsters();
    this.loading = false;
  },
};
</script>

<style>
.new-battle-stepper-container {
  width: 80%;
}

.battle-container {
  height: 650px;
  background-color: #ededed;
}
</style>