<template>
  <v-tooltip bottom color="transparent">
    <template v-slot:activator="{ on, attrs }">
      <v-card
        :elevation="attrs['aria-expanded'] === 'true' ? 6 : 2"
        v-bind="attrs"
        v-on="on"
        @dblclick="equip"
        class="inventory-item"
      >
        <v-card-text>
          <span style="font-weight: bold">{{ item.name }}</span>
        </v-card-text>
      </v-card>
    </template>
    <v-card width="300px">
      <v-card-title>{{ item.name }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="4"> +{{ item.itemStrength }}🗡️ </v-col>
          <v-col cols="4"> +{{ item.itemDexterity }}✋ </v-col>
          <v-col cols="4"> +{{ item.itemIntelligence }}🧠 </v-col>
        </v-row>
        <v-row
          v-if="
            item.requiredStrength ||
            item.requiredStrength ||
            item.requiredStrength
          "
        >
          <v-col>
            <span>Requirements</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" v-if="item.requiredStrength">
            {{ item.requiredStrength }}🗡️
          </v-col>
          <v-col cols="4" v-if="item.requiredStrength">
            {{ item.requiredDexterity }}✋
          </v-col>
          <v-col cols="4" v-if="item.requiredStrength">
            {{ item.requiredIntelligence }}🧠
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-tooltip>
</template>

<script>
export default {
  name: "PlayerInventoryItem",
  props: {
    item: {
      required: true,
    },
  },
  data: () => ({
    hovering: false,
  }),
  methods: {
    equip() {
      console.log("Equip");
    },
  },
};
</script>

<style>
.inventory-item {
  cursor: pointer;
}
</style>