<template>
  <v-card height="500px">
    <v-card-title>Equipped Items</v-card-title>
    <v-card-text>
      <h5 v-if="player.equipments.length <= 0">No items equipped</h5>
      <div
        v-for="(item, index) in player.equipments"
        :key="`${item.id}-${index}`"
      >
        <h5>Name: {{ item.name }}</h5>
        <p>+{{ item.strength }} Strength</p>
        <p>+{{ item.dexterity }} Dexterity</p>
        <p>+{{ item.intelligence }} Intelligence</p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "PlayerEquippedItems",
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