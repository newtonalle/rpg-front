<template>
  <div>
    <v-card
      class="player-selection-card"
      :id="selected ? 'player-selected' : ''"
    >
      <v-card-title
        ><span class="text-capitalize">
          {{ player.name }}, Level {{ player.level }}
          {{ player.class.name }}</span
        ></v-card-title
      >
      <v-card-text>
        <v-row>
          <v-col>
            {{ player.currentHealth }}/{{ player.maxHealth }} ❤️
            <br />
            <br />
            {{ player.currentMana }}/{{ player.maxMana }} ✨
            <br />
          </v-col>
        </v-row>
        <br />
        <v-row>
          <v-col class="px-12">
            <v-btn
              :disabled="selected"
              color="green white--text"
              @click="selectPlayer(player.id)"
              class="px-6"
              >{{ selected ? "Selected" : "Select" }}</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: { selected: Boolean, player: Object },

  methods: {
    selectPlayer() {
      this.$emit("selectPlayer", this.player.id);
    },
  },
};
</script>

<style>
.v-btn {
  width: 100%;
}
#player-selected {
  border-color: #d2ead3;
  border-width: 4px;
}
.player-selection-card {
  border-radius: 10px 100px / 120px !important;
}
</style>