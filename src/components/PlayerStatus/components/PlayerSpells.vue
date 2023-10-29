<template>
  <v-card>
    <v-card-title>
      Spells ({{ player.unallocatedSpellLevels }} SLP)
      <v-spacer />
      <v-dialog width="400px" v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" v-bind="attrs" v-on="on"> Learn Spell </v-btn>
        </template>
        <v-card>
          <v-card-title> Choose a Spell </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                v-for="(spell, index) in playerClass.spells"
                :key="`learnSpellIndex-${index}`"
                cols="6"
              >
                <v-btn
                  :loading="spellLoading"
                  color="primary"
                  block
                  :disabled="
                    player.spellLevelPlayers.findIndex(
                      (spellLevelPlayer) =>
                        spellLevelPlayer.spellLevel.spell.id === spell.id
                    ) > -1 ||
                    spell.levelAvailability > player.level ||
                    player.unallocatedSpellLevels <= 0
                  "
                  @click="learnSpell(spell.id)"
                  >{{ spell.name }}</v-btn
                >
                <p>{{ unavailabilityText(spell) }}</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col
          cols="6"
          v-for="(spellLevelPlayer, index) of player.spellLevelPlayers"
          :key="`Index-${index}-Id-${spellLevelPlayer.id}`"
        >
          <player-spell :spellLevelPlayer="spellLevelPlayer" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import PlayerSpell from "./PlayerSpell.vue";
export default {
  name: "PlayerSpells",

  data: () => ({ dialog: false, spellLoading: false }),

  components: {
    PlayerSpell,
  },

  methods: {
    ...mapActions(["getMe", "getCurrentPlayer"]),
    unavailabilityText(spell) {
      if (
        this.player.spellLevelPlayers.findIndex(
          (spellLevelPlayer) =>
            spellLevelPlayer.spellLevel.spell.id === spell.id
        ) > -1
      ) {
        return "Already learned this spell!";
      } else if (spell.levelAvailability > this.player.level) {
        return `Spell requires level ${spell.levelAvailability}`;
      } else if (this.player.unallocatedSpellLevels <= 0) {
        return "Requires 1 more SLP!";
      } else {
        return "";
      }
    },

    async learnSpell(spellId) {
      this.spellLoading = true;
      await axios
        .post(`/players/${this.player.id}/spells/${spellId}/learn`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      await this.getMe();
      await this.getCurrentPlayer();
      this.spellLoading = false;
    },
  },

  props: {
    player: {
      required: true,
    },
    loading: {
      default: false,
    },
    playerClass: Object,
  },
};
</script>