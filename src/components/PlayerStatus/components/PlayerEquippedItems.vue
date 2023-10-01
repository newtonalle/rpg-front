<template>
  <v-card>
    <v-card-title>Equipped Items</v-card-title>
    <v-card-text>
      <div v-if="player.equipments.length <= 0">
        <h5>No items equipped</h5>
        <br />
      </div>
      <v-row>
        <v-col v-for="(item, index) in player.equipments" :key="`${item.id}-${index}`" cols="12">
          <player-inventory-item :item="item" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import PlayerInventoryItem from "./PlayerInventoryItem.vue";
export default {
  components: { PlayerInventoryItem },
  name: "PlayerInventoryItems",
  props: {
    player: {
      required: true,
    },
    loading: {
      default: false,
    },
  },
};
</script>