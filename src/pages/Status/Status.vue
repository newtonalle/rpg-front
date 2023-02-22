<template>
  <div>
    <v-skeleton-loader v-if="loading" type="card-avatar, article, actions">
    </v-skeleton-loader>
    <div v-else>
      <v-row justify="center">
        <v-col cols="4">
          <v-row>
            <v-col>
              <player-card :player="player" />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <player-equipped-items :player="player" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <player-inventory :player="player" @showSnackbar="snackbar = true" />
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
import { mapActions, mapState } from "vuex";
import PlayerCard from "./components/PlayerCard.vue";
import PlayerInventory from "./components/PlayerInventory.vue";
import PlayerEquippedItems from "./components/PlayerEquippedItems.vue";
export default {
  data: () => ({ loading: false, snackbar: false }),

  methods: {
    ...mapActions(["getMe"]),
  },

  components: {
    PlayerCard,
    PlayerInventory,
    PlayerEquippedItems,
  },

  computed: {
    ...mapState(["player"]),
  },

  async mounted() {
    this.loading = true;
    await this.getMe();
    this.loading = false;
  },
};
</script>