<template>
  <v-card style="cursor: pointer;" :elevation="isHovering ? 24 : 6" @mouseover="isHovering = true"
    @mouseleave="isHovering = false" @click="redirect">
    <v-card-title>Battle #{{ battle.id }}</v-card-title>
    <v-card-text>Winner: {{ battleWinner }}
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

  data: () => ({
    isHovering: false
  }),

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