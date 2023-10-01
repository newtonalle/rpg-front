<template>
  <div>
    <v-card>
      <v-card-text v-if="newPlayerPopup">
        <v-row>
          <v-col>
            <v-text-field
              type="text"
              label="Name"
              placeholder="Name"
              outlined
              hide-details
              v-model="playerInfo.playerName"
            />
            <br />
            <h3>CLASS</h3>
            <br />
            <div
              v-for="(playerClass, index) in classes"
              :key="`classIndex-${index}`"
            >
              <v-btn
                @click="playerInfo.selectedClassId = playerClass.id"
                :color="cardColor(playerClass.id)"
                style="width: 50%"
                >{{ playerClass.name }}</v-btn
              >
            </div>
          </v-col>
        </v-row>
        <br />
        <v-btn
          style="heigth: 100%"
          color="green white--text"
          @click="createPlayer()"
          >Create New Player</v-btn
        >
        <br />
        <br />
        <v-btn
          style="height: 50px"
          color="secondary"
          @click="newPlayerPopup = false"
          >-</v-btn
        >
      </v-card-text>
      <v-card-text v-else>
        <v-btn
          style="height: 50px"
          color="primary"
          @click="newPlayerPopup = true"
          >+</v-btn
        >
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: { classes: Array },

  data: () => ({
    newPlayerPopup: false,
    playerInfo: {
      selectedClassId: 1,
      playerName: "",
    },
  }),

  methods: {
    cardColor(classId) {
      if (classId === this.playerInfo.selectedClassId) {
        return "secondary";
      } else {
        return "primary";
      }
    },

    createPlayer() {
      this.$emit("createPlayer", this.playerInfo);
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