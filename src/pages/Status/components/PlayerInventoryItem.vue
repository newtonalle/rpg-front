<template>
  <v-tooltip bottom color="transparent">
    <template v-slot:activator="{ on, attrs }">
      <v-card
        :elevation="attrs['aria-expanded'] === 'true' ? 6 : 2"
        v-bind="attrs"
        v-on="on"
        @dblclick="toggleEquip"
        class="inventory-item"
        :color="cardColor"
      >
        <v-progress-circular
          v-if="loading"
          indeterminate
          color="green"
        ></v-progress-circular>
        <div v-else>
          <v-card-text>
            <span style="font-weight: bold">{{ item.name }}</span>
          </v-card-text>
        </div>
      </v-card>
    </template>
    <player-inventory-item-expanded :item="item" />
  </v-tooltip>
</template>

<script>
import { mapActions, mapState } from "vuex";
import axios from "axios";
import PlayerInventoryItemExpanded from "./PlayerInventoryItemExpanded.vue";
export default {
  components: { PlayerInventoryItemExpanded },
  name: "PlayerInventoryItem",
  data: () => ({ loading: false }),
  props: {
    item: {
      required: true,
    },
  },

  computed: {
    ...mapState(["player"]),

    cardColor() {
      let color = "green lighten-5";
      if (
        this.item.requiredStrength > this.player.totalStrength ||
        this.item.requiredDexterity > this.player.totalDexterity ||
        this.item.requiredIntelligence > this.player.totalIntelligence
      ) {
        color = "red lighten-2";
      }

      return color;
    },
  },

  methods: {
    ...mapActions(["getMe"]),
    async toggleEquip() {
      if (this.loading) return;
      this.loading = true;
      await axios
        .put(`/players/inventory/${this.item.id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          this.$emit("showSnackbar");
        });
      await this.getMe();
      this.loading = false;
    },
  },
};
</script>

<style>
.inventory-item {
  cursor: pointer;
}
</style>