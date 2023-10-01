<template>
  <div>
    <v-skeleton-loader v-if="loading" type="card-avatar, article, actions">
    </v-skeleton-loader>
    <div v-else>
      <v-container class="battle-container">
        <v-row style="height: 100%">
          <v-col align-self="center" cols="4">
            <v-card>
              <v-card-title>"{{ currentBattle.player.name }}" the
                {{ currentBattle.player.class }} (Lvl.
                {{ currentBattle.player.level }})</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col>
                    {{ currentBattle.player.currentHealth }}/{{
                      currentBattle.player.maxHealth
                    }}
                    ❤️
                    <br />
                    <br />
                    {{ currentBattle.player.currentMana }}/{{
                      currentBattle.player.maxMana
                    }}
                    ✨
                    <br />
                  </v-col>

                  <v-col>
                    {{ currentBattle.player.totalStrength }} 🗡️
                    <br />
                    {{ currentBattle.player.totalDexterity }} ✋
                    <br />
                    {{ currentBattle.player.totalIntelligence }} 🧠
                    <br />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col align-self="center" cols="4">
            <v-row><v-col>VS</v-col></v-row>
            <v-row><v-col><new-round @update="$emit('update')" /></v-col></v-row>
          </v-col>
          <v-col align-self="center" cols="4">
            <v-card>
              <monster-card :monster="currentBattle.monster" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-data-table :headers="headers" :items="items" />
      </v-container>
    </div>
    <!-- <v-snackbar v-model="snackbar">
      You WIN!

      <template v-slot:action="{ attrs }">
        <v-btn color="lime" text v-bind="attrs" @click="snackbar = false">
          Go Home
        </v-btn>
      </template>
    </v-snackbar> -->
  </div>
</template>

<script>
import MonsterCard from "./MonsterCard.vue";
import NewRound from "./NewRound.vue";

export default {
  props: { currentBattle: Object },

  components: { MonsterCard, NewRound },

  data: () => ({
    loading: false,
    snackbar: true
  }),

  computed: {
    headers() {
      return [
        {
          text: "ID",
          value: "id",
          sortable: false
        },
        {
          text: "Player Turn",
          value: "isPlayerRound",
          sortable: false
        },
        {
          text: "Player Damage Dealt",
          value: "playerDamageDealt",
          sortable: false
        },
        {
          text: "Monster Damage Dealt",
          value: "monsterDamageDealt",
          sortable: false
        },
      ];
    },
    items() {
      return [...this.currentBattle.rounds].sort((r1, r2) => r1.id < r2.id ? 1 : -1)
    }
  },
};
</script>

<style scoped>
.battle-container {
  height: 300px;
  width: 80%;
}
</style>