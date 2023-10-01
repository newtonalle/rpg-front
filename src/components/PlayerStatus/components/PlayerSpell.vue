<template>
  <v-card>
    <v-card-title>
      {{ spellLevelPlayer.spellLevel.spell.name }} (Lvl.{{
        spellLevelPlayer.spellLevel.level
      }})
    </v-card-title>
    <v-card-text>
      {{ spellLevelPlayer.spellLevel.damage }} ⚔️
      <br />
      {{ spellLevelPlayer.spellLevel.manaCost }} 🪄
    </v-card-text>
    <v-card-actions
      ><v-btn
        :disabled="player.unallocatedSpellLevels <= 0"
        color="secondary"
        @click="levelUpSpell"
        :loading="loading"
        block
        >Level Up</v-btn
      ></v-card-actions
    >
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "PlayerSpell",
  props: {
    spellLevelPlayer: {
      required: true,
    },
  },
  data: () => ({
    loading: false,
  }),

  computed: {
    ...mapState(["player"]),
  },

  methods: {
    ...mapActions(["getMe", "getCurrentPlayer"]),

    async levelUpSpell() {
      this.loading = true;
      await this.$store.dispatch("levelUpSpell", {
        spellLevelPlayerId: this.spellLevelPlayer.id,
        playerId: this.player.id,
      });
      await this.getMe();
      await this.getCurrentPlayer();
      this.loading = false;
    },
  },
};
</script>