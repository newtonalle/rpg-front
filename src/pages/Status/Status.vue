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
          <player-inventory :player="player" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PlayerCard from "./components/PlayerCard.vue";
import PlayerInventory from "./components/PlayerInventory.vue";
import PlayerEquippedItems from "./components/PlayerEquippedItems.vue";
export default {
  data: () => ({ loading: false, player: { inventory: [], equipments: [] } }),

  methods: {
    ...mapActions(["getMe"]),
  },

  components: {
    PlayerCard,
    PlayerInventory,
    PlayerEquippedItems,
  },

  async mounted() {
    this.loading = true;
    this.player = await this.getMe();
    this.loading = false;
  },
};
</script>