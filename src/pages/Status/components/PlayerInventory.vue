<template>
  <v-card height="664px">
    <v-card-title>Inventory</v-card-title>
    <v-card-text>
      <h5 v-if="player.inventory.length <= 0">No items in your inventory</h5>
      <v-row>
        <v-col
          v-for="(item, index) in player.inventory"
          :key="`${item.id}-${index}`"
          cols="4"
        >
          <player-inventory-item :item="item" @showSnackbar="showSnackbar" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import PlayerInventoryItem from "./PlayerInventoryItem.vue";
export default {
  components: { PlayerInventoryItem },
  name: "PlayerInventory",
  props: {
    player: {
      required: true,
    },
    loading: {
      default: false,
    },
  },
  methods: {
    showSnackbar() {
      this.$emit("showSnackbar");
    },
  },
};
</script>