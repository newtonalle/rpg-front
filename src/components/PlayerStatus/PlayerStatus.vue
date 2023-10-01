<template>
  <div>
    <div>
      <v-row justify="center">
        <v-col cols="4">
          <v-row>
            <v-col>
              <player-card :player="player" :playerClass="playerClass" />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <player-equipped-items style="height: 100%" :player="player" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-row>
            <v-col>
              <player-spells
                style="height: 100%"
                :player="player"
                :playerClass="playerClass"
                @showSnackbar="snackbar = true"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <player-inventory
                style="height: 100%"
                :player="player"
                @showSnackbar="snackbar = true"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-snackbar v-model="snackbar">
      Unable to equip item, lacking requirements!
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
  
<script>
import PlayerCard from "./components/PlayerCard.vue";
import PlayerSpells from "./components/PlayerSpells.vue";
import PlayerInventory from "./components/PlayerInventory.vue";
import PlayerEquippedItems from "./components/PlayerEquippedItems.vue";

import { mapActions, mapState } from "vuex";
export default {
  data: () => ({ loading: false, snackbar: false }),

  props: {
    player: Object,
  },

  methods: {
    ...mapActions(["getClassById"]),
  },

  computed: {
    ...mapState(["playerClass"]),
  },

  components: {
    PlayerCard,
    PlayerInventory,
    PlayerEquippedItems,
    PlayerSpells,
  },

  mounted() {
    this.getClassById(this.player.classId);
  },
};
</script>