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
            <v-stepper-step step="3"> Confirm battle </v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <!-- step 1 -->
            <v-stepper-content step="1">
              <v-container class="battle-container">
                <v-row style="height: 100%">
                  <v-col align-self="center">
                    <v-btn @click="createNewMonsters()">New Battle</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-stepper-content>

            <!-- step 2 -->
            <v-stepper-content step="2">
              <v-container class="battle-container">
                <v-row style="height: 100%">
                  <v-col
                    v-for="(monster, index) in monsters"
                    align-self="center"
                    cols="4"
                    :key="`monster-${index}`"
                  >
                    <v-card style="height: 100%">
                      <monster-card :monster="monster" />
                      <v-card-actions>
                        <v-btn
                          block
                          color="primary"
                          @click="selectMonster(monster)"
                          >Choose Monster</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-stepper-content>

            <!-- step 3 -->
            <v-stepper-content step="3">
              <v-container class="battle-container">
                <v-row style="height: 100%">
                  <v-col align-self="center" cols="4">
                    <v-card style="height: 100%">
                      <v-card-title
                        >"{{ player.name }}" the {{ player.class }} (Lvl.
                        {{ player.level }})</v-card-title
                      >
                      <v-card-text>
                        <v-row>
                          <v-col>
                            {{ player.currentHealth }}/{{ player.maxHealth }} ❤️
                            <br />
                            <br />
                            {{ player.currentMana }}/{{ player.maxMana }} ✨
                            <br />
                          </v-col>

                          <v-col>
                            {{ player.totalStrength }} 🗡️
                            <br />
                            {{ player.totalDexterity }} ✋
                            <br />
                            {{ player.totalIntelligence }} 🧠
                            <br />
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col align-self="center" cols="4">
                    <v-row><v-col>VS</v-col></v-row>
                    <v-row
                      ><v-col
                        ><v-btn color="primary" @click="createNewBattle"
                          >FIGHT!</v-btn
                        ></v-col
                      ></v-row
                    >
                  </v-col>
                  <v-col align-self="center" cols="4">
                    <v-card style="height: 100%">
                      <monster-card :monster="selectedMonster" />
                    </v-card>
                  </v-col>
                </v-row>
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
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    loading: false,
    newBattleStep: 1,
    selectedMonster: {},
  }),

  computed: {
    ...mapState(["player", "monsters"]),
  },

  components: { MonsterCard },

  methods: {
    ...mapActions(["getMe", "getMonsters", "createMonsters", "newBattle"]),

    async createNewMonsters() {
      if (this.loading) return;
      this.loading = true;
      await this.createMonsters();
      await this.getMonsters();
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
      this.newBattleStep = 3;
    },
  },

  async mounted() {
    this.loading = true;
    await this.getMe();
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
  height: 500px;
  background-color: #ededed;
}
</style>