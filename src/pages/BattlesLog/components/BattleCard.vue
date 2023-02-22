<template>
  <v-card @click="redirect">
    <v-card-title>Batalha #{{ battle.id }}</v-card-title>
    <v-card-text
      >Winner: {{ battleWinner }}
      <br />
      Monster: {{ battle.monster.name }} the
      {{ battle.monster.type }}
      <br />
      <div v-if="battle.playerWon">Gained {{ battle.experienceGained }} XP</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    battle: {
      type: Object,
      required: true,
    },
  },

  computed: {
    battleWinner() {
      if (this.battle.playerWon) {
        return "Player";
      } else {
        return "Monster";
      }
    },
  },

  methods: {
    redirect() {
      this.$router.push({
        name: "battleRoundsLog",
        params: { battleId: this.battle.id },
      });
    },
  },
};
</script>