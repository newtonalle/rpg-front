<template>
  <v-card width="300px">
    <v-card-title>{{ item.name }}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <span>{{ item.slot }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4"> +{{ item.itemStrength }}🗡️ </v-col>
        <v-col cols="4"> +{{ item.itemDexterity }}✋ </v-col>
        <v-col cols="4"> +{{ item.itemIntelligence }}🧠 </v-col>
      </v-row>
      <v-row
        v-if="
          item.requiredStrength ||
          item.requiredDexterity ||
          item.requiredStrength
        "
      >
        <v-col>
          <span>Requirements</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="4"
          v-if="item.requiredStrength"
          :class="requirementColor.requiredStrength"
        >
          {{ item.requiredStrength }}🗡️
        </v-col>
        <v-col
          cols="4"
          v-if="item.requiredDexterity"
          :class="requirementColor.requiredDexterity"
        >
          {{ item.requiredDexterity }}✋
        </v-col>
        <v-col
          cols="4"
          v-if="item.requiredIntelligence"
          :class="requirementColor.requiredIntelligence"
        >
          {{ item.requiredIntelligence }}🧠
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PlayerInventoryItem",
  props: {
    item: Object,
  },

  computed: {
    ...mapState(["player"]),

    requirementColor() {
      let colors = {};

      if (this.item.requiredStrength > this.player.totalStrength) {
        colors.requiredStrength = "font-weight-black red--text";
      }

      if (this.item.requiredDexterity > this.player.totalDexterity) {
        colors.requiredDexterity = "font-weight-black red--text";
      }

      if (this.item.requiredIntelligence > this.player.totalIntelligence) {
        colors.requiredIntelligence = "font-weight-black red--text";
      }

      return colors;
    },
  },
};
</script>

<style>
.inventory-item {
  cursor: pointer;
}
</style>